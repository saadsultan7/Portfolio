import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-proxy',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            const apiKey = env.GEMINI_API_KEY;

            if (!apiKey) {
              console.error('❌ Error: GEMINI_API_KEY is missing in .env.local');
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Server configuration error: Missing API Key' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });

            req.on('end', async () => {
              try {
                console.log('🤖 Proxying streaming request to Gemini API...');
                const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:streamGenerateContent?alt=sse&key=${apiKey}`;

                const response = await fetch(API_URL, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: body,
                });

                if (!response.ok) {
                  const errorText = await response.text();
                  console.error(`❌ Gemini API Error: ${response.status} ${response.statusText}`);
                  console.error(`Details: ${errorText}`);
                  res.statusCode = response.status;
                  res.end(errorText);
                  return;
                }

                console.log('✅ Gemini API streaming response received');
                res.setHeader('Content-Type', 'text/event-stream');
                res.setHeader('Cache-Control', 'no-cache');
                res.setHeader('Connection', 'keep-alive');
                res.statusCode = 200;

                const reader = response.body?.getReader();
                if (!reader) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'No response stream' }));
                  return;
                }

                const pump = async () => {
                  while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                      res.end();
                      break;
                    }
                    res.write(value);
                  }
                };
                pump().catch(err => {
                  console.error('❌ Stream error:', err);
                  res.end();
                });
              } catch (error) {
                console.error('❌ Proxy Internal Error:', error);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Failed to process request', details: String(error) }));
              }
            });
          });
        }
      }
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  }
})