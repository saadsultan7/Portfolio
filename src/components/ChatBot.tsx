import { useState, useEffect, useRef, memo } from 'react';
import type { ReactNode } from 'react';
import './ChatBot.css';

const knowledgeBase = {
  name: 'Saad Sultan',
  bio: "I'm a dedicated React and React Native Developer with over years of hands-on experience. I help businesses and startups turn their ideas into powerful, responsive, and user-friendly mobile and web applications. I'm a Software Developer driven by the challenge of crafting impactful web and mobile applications that solve real-world problems and elevate user experiences. Explore my Projects to see what I've been working on. I actively share practical insights and lessons learned from my experience in WEB APP and Mobile APP Development. Connect with me on LinkedIn to stay updated on my latest posts about development and programming. I'm currently working as a Software Developer, open to collaborations and opportunities that let me create value, sharpen my skills, and grow further. If you're looking for someone who can contribute to your team's success, let's connect.",
  contact: {
    email: 'saadsultan4004@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saad-sultan-25a323298/',
    github: 'https://github.com/saadsultan7',
    twitter: 'https://x.com/itachi78900?s=08',
    facebook:
      'https://www.facebook.com/SaadSultan.50000MW?mibextid=ZbWKwL',
    portfolio: 'https://portfolio-ecru-two-36.vercel.app/',
  },
  skills: [
    'Frontend/Mobile: React, React Native, JavaScript, Redux, React Navigation, React Native Reanimated, Android Studio, TypeScript',
    'Backend: Python, Django, Node.js, Express.js, C++',
    'Databases: PostgreSQL, MySQL, MongoDB, Firebase',
    'Tools/DevOps: Git, GitHub',
  ],
  projects: [
    {
      title: 'Noor Shop',
      type: 'Mobile App',
      techStack: [
        'React Native',
        'Redux',
        'Navigation Libraries',
        'UI Libraries',
        'Fetch API',
        'Animations',
      ],
      description:
        'Cross-platform mobile app (iOS & Android) JWT authentication with secure token storage Product browsing with search, filters, and category navigation Product variations: size, color, quantity selection Cart management and Stripe payment integration Order history and push notifications Frontend built solo with React Native CLI and Redux Toolkit Optimized performance: FlatList pagination, minimal animations, backend WebP images',
      status: 'In Progress',
    },
    {
      title: 'Food Recipe',
      type: 'Mobile App',
      techStack: [
        'React Native',
        'React Navigation',
        'React Native Reanimated',
        'TheMealDB API',
      ],
      description:
        'Mobile app built with React Native (iOS & Android) Integrated TheMealDB API for recipes Screens: Welcome, Home, and Recipe Details Navigation handled with React Navigation Animations implemented using React Native Reanimated Lightweight and responsive UI for smooth performance',
    },
    {
      title: 'Chatz',
      type: 'Mobile App',
      techStack: ['React Native', 'Firebase', 'MySQL', 'Google Auth'],
      description:
        'Mobile messaging app similar to WhatsApp Backend powered by Firebase for storing users and messages Signup via Google verification or email Local user data storage implemented with MySQL Built with React Native for smooth, cross-platform performance',
    },
    {
      title: 'Parchi',
      type: 'Mobile App',
      techStack: [
        'React Native',
        'Python',
        'Django',
        'PostgreSQL',
        'Redux',
      ],
      description:
        'Point of Sale application for multiple types of vendors Frontend built with React Native; backend in Python Django; PostgreSQL database State management with Redux Features include Bluetooth printer integration, camera integration, and more Optimized for smooth performance on mobile devices',
    },
    {
      title: 'HIFZ Tracking',
      type: 'Web App',
      techStack: ['React', 'Node.js', 'SWR-3'],
      description:
        'Web application for tracking Hifz progress and managing students Features include assignments, attendance, messaging, and notice board Voice transfer feature for submitting recitations (stored with SWR-3) Admin panel for managing students, teachers, and content Frontend built with React; backend provided in Node.js Real-time notifications and updates',
      link: 'https://hifztrackerui.onrender.com/',
    },
    {
      title: 'Final Year Project',
      type: 'Web App',
      techStack: [
        'MERN Stack (MongoDB, Express, React, Node)',
        'Web Socket',
        'Stripe',
      ],
      description:
        "Final Year Project built on MERN Stack (MongoDB, Express, React, Node.js) Real-time messaging using WebSockets Stripe payment integration for services Teacher profiles and student posts Admin panel for managing users and content Advanced filter system: find the best teacher or job efficiently Designed for smooth UX and responsive performance",
    },
    {
      title: 'PAB',
      type: 'Web App',
      techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Redux'],
      description:
        'Platform for anesthesiology students to prepare for board exams Over 1,000+ questions with multiple question types and progress tracking Mock tests and performance analytics Subscription-based with free trial; payments via Zoho Authentication: JWT tokens, Google & Apple login Frontend state managed with Redux Responsive and intuitive UI for seamless exam preparation',
      link: 'https://www.pabsmartprep.com/',
    },
    {
      title: 'Umrah Portal',
      type: 'Web App',
      techStack: ['SaaS', 'Web Technologies'],
      description:
        'SaaS platform for travel agencies to manage customers, packages, and bookings Handles visa processing, flight & hotel arrangements, payment tracking, and customer communication Multi-user roles: Admin and Agent Analytics dashboards and automated notifications for better workflow Built as a complete web application with a focus on efficiency and usability',
      link: 'https://www.group2travel.com/',
    },
    {
      title: 'POS System',
      type: 'Desktop App',
      techStack: ['React Native Windows'],
      description:
        'Point of Sale system built with React Native Windows for desktop. Architected a robust offline-first system allowing uninterrupted operation without internet, with data sync on connectivity restore. Supports delivery, take-away, and dine-in order management workflows. Implemented inventory management for real-time stock tracking. Developed sales reporting and analytics dashboards. Built customer management features including customer profiles and order history. Integrated with external hardware such as receipt printers.',
    },
  ],
  experience: [
    {
      title: 'Freelancer as a Mobile App Developer',
      company: 'Upwork',
      startDate: 'June 2023',
      endDate: 'May 2024',
      description:
        'Started my journey as a freelancer, delivering various mobile and web solutions for diverse clients.',
      projects: 'Partner App, Ecommerce, Chatz, Food Recipe',
    },
    {
      title: 'Intern React & React Native Dev',
      company: 'MAAQ Services',
      startDate: 'Aug 2024',
      endDate: 'Jan 2025',
      description:
        'Gained hands-on experience in a professional environment, contributing to key projects and enhancing skills in React and react native ecosystem.',
      projects: 'PABSmart, Parchi',
    },
    {
      title: 'React & React Native Dev',
      company: 'Saudi Arabia Software House',
      startDate: 'Jan 2025',
      endDate: 'Present',
      description:
        'Working remotely as a full-time developer, focusing on building scalable web and mobile applications for international clients.',
      projects: 'Hifz Tracking, Umrah Portal',
    },
  ],
};

const API_URL = '/api/chat';
const MAX_HISTORY = 50;

const systemPrompt = `You are a helpful, friendly, and professional AI Assistant for ${knowledgeBase.name}.

Your role is to answer questions about Saad Sultan using the knowledge base provided below. Be conversational, helpful, and informative.

When users ask about Saad (in any variation like "saad", "Saad", "tell me about saad", etc.), provide relevant information from the knowledge base.

For questions about Saad's work, projects, skills, or experience - use ONLY the knowledge base.
For general knowledge questions unrelated to Saad - you can use the Google Search tool.

Always be friendly and provide complete, helpful answers. If asked generally about Saad, give a brief overview of who he is, what he does, and his key skills.

Knowledge Base: ${JSON.stringify(knowledgeBase)}`;

interface Message {
  text: string;
  sender: 'user' | 'ai';
  timestamp: number;
}

/**
 * Safe markdown-to-React renderer. No dangerouslySetInnerHTML.
 * Handles: **bold**, [link](url), and newlines.
 */
function renderMarkdown(text: string): ReactNode[] {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    // Tokenize bold and links within a line
    const parts: ReactNode[] = [];
    // Match **bold** or [text](url)
    const regex = /(\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      // Push text before the match
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }

      if (match[0].startsWith('**')) {
        // Bold
        parts.push(<strong key={`${lineIdx}-${match.index}`}>{match[2]}</strong>);
      } else if (match[0].startsWith('[')) {
        // Link
        parts.push(
          <a
            key={`${lineIdx}-${match.index}`}
            href={match[4]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {match[3]}
          </a>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Remaining text after last match
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }

    return (
      <span key={lineIdx}>
        {parts.length > 0 ? parts : line}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    );
  });
}

let messageIdCounter = 0;
function nextMessageId() {
  return Date.now() * 1000 + (++messageIdCounter % 1000);
}

const ChatMessage = memo(({ msg }: { msg: Message }) => (
  <div className={`chatbot-message-wrapper ${msg.sender}`}>
    <div className={`chatbot-message ${msg.sender}`}>
      {renderMarkdown(msg.text)}
    </div>
  </div>
));
ChatMessage.displayName = 'ChatMessage';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I am the AI assistant for Saad Sultan. How can I help you today?",
      sender: 'ai',
      timestamp: nextMessageId(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      try {
        const history = JSON.parse(savedHistory);
        if (history.length > 0) {
          setMessages([
            {
              text: "Hello! I am the AI assistant for Saad Sultan. How can I help you today?",
              sender: 'ai',
              timestamp: nextMessageId(),
            },
            ...history,
          ]);
        }
      } catch {
        // Corrupted history, start fresh
      }
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      const historyToSave = messages.slice(1);
      try {
        localStorage.setItem(
          'chatHistory',
          JSON.stringify(historyToSave.slice(-MAX_HISTORY))
        );
      } catch {
        // Storage quota exceeded, silently fail
      }
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop =
        chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Normalize the input
    const normalizedInput = inputValue.replace(/\b(saad)\b/gi, 'Saad');

    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: nextMessageId(),
    };

    const currentInput = normalizedInput;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const recentHistory = messages
        .slice(-10)
        .filter(
          (msg) =>
            msg.text !==
            "Hello! I am the AI assistant for Saad Sultan. How can I help you today?"
        );

      const contents: { role: string; parts: { text: string }[] }[] = [];

      recentHistory.forEach((msg) => {
        if (msg.sender === 'user') {
          contents.push({
            role: 'user',
            parts: [{ text: msg.text }],
          });
        } else if (msg.sender === 'ai') {
          const cleanText = msg.text
            .replace(/<[^>]*>/g, '')
            .replace(/Sources:.*$/s, '')
            .trim();
          if (cleanText) {
            contents.push({
              role: 'model',
              parts: [{ text: cleanText }],
            });
          }
        }
      });

      contents.push({
        role: 'user',
        parts: [{ text: currentInput }],
      });

      const payload = {
        contents,
        systemInstruction: { parts: [{ text: systemPrompt }] },
        tools: [{ google_search: {} }],
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_NONE',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_NONE',
          },
        ],
      };

      const aiMessageId = nextMessageId();
      const aiMessage: Message = {
        text: '',
        sender: 'ai',
        timestamp: aiMessageId,
      };
      setMessages((prev) => [...prev, aiMessage]);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream');

      const decoder = new TextDecoder();
      let fullText = '';
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const jsonStr = line.slice(6).trim();
          if (!jsonStr) continue;

          try {
            const chunk = JSON.parse(jsonStr);
            const text =
              chunk.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              fullText += text;
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.timestamp === aiMessageId
                    ? { ...msg, text: fullText }
                    : msg
                )
              );
            }
          } catch {
            // skip malformed chunks
          }
        }
      }

      if (!fullText.trim()) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.timestamp === aiMessageId
              ? {
                  ...msg,
                  text: "I'm here to help! Could you please rephrase your question?",
                }
              : msg
          )
        );
      }
    } catch {
      const errorText =
        "I'm sorry, I encountered an error while processing your request. Please try again.";
      setMessages((prev) => {
        const hasPlaceholder = prev.some(
          (msg) => msg.sender === 'ai' && msg.text === ''
        );
        if (hasPlaceholder) {
          return prev.map((msg) =>
            msg.sender === 'ai' && msg.text === ''
              ? { ...msg, text: errorText }
              : msg
          );
        }
        return [
          ...prev,
          { text: errorText, sender: 'ai', timestamp: nextMessageId() },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    try {
      localStorage.removeItem('chatHistory');
    } catch {
      // silently fail
    }
    setMessages([
      {
        text: "Hello! I am the AI assistant for Saad Sultan. How can I help you today?",
        sender: 'ai',
        timestamp: nextMessageId(),
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className={`chatbot-speed-dial ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="chatbot-popup" role="dialog" aria-label="Chat with AI assistant">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-header-text">
                <h3>Your Personal AI Assistant</h3>
                <p>Ask me anything about Saad Sultan</p>
              </div>
            </div>
            <button onClick={clearChat} className="chatbot-clear-btn">
              Clear Chat
            </button>
          </div>

          <div className="chatbot-messages" ref={chatMessagesRef} role="log" aria-live="polite">
            {messages.map((msg) =>
              msg.text === '' ? null : (
                <ChatMessage key={msg.timestamp} msg={msg} />
              )
            )}
            {isLoading && (
              <div className="chatbot-message-wrapper ai">
                <div className="chatbot-message ai chatbot-loading">
                  <div className="chatbot-typing-indicator" aria-label="AI is typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question here..."
              disabled={isLoading}
              className="chatbot-input"
              aria-label="Chat message input"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="chatbot-send-btn"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
