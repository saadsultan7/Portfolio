import { useEffect, useRef } from 'react';
import './AnimatedBalls.css';

interface Ball {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    baseX: number;
    baseY: number;
}

const AnimatedBalls = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ballsRef = useRef<Ball[]>([]);
    const animationFrameRef = useRef<number>();
    const mouseRef = useRef({ x: 0, y: 0 });
    const scrollOffsetRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size with buffer
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(
                window.innerHeight ,
                document.documentElement.scrollHeight ,
                document.body.scrollHeight 
            );
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 🎨 COLOR SCHEMES
        const pinkColors = [
            'rgba(255, 105, 180, 0.35)',
            'rgba(255, 20, 147, 0.30)',
            'rgba(219, 112, 147, 0.38)',
            'rgba(255, 182, 193, 0.40)',
            'rgba(255, 192, 203, 0.32)',
            'rgba(238, 130, 238, 0.35)',
        ];

        const greenColors = [
            'rgba(24, 202, 146, 0.25)',
            'rgba(18, 170, 94, 0.22)',
            'rgba(24, 252, 169, 0.20)',
            'rgba(47, 151, 99, 0.25)',
            'rgba(67, 255, 161, 0.18)',
            'rgba(12, 170, 94, 0.23)',
        ];

        const isDarkMode = () => document.body.classList.contains('dark');
        const getColors = () => isDarkMode() ? greenColors : pinkColors;

        const initBalls = () => {
            const numberOfBalls = Math.floor((window.innerWidth * window.innerHeight) / 25000);
            const colors = getColors();
            ballsRef.current = [];

            for (let i = 0; i < numberOfBalls; i++) {
                const x = Math.random() * canvas.width;
                // Use full canvas height - balls appear everywhere!
                const y = Math.random() * canvas.height;
                ballsRef.current.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    radius: Math.random() * 40 + 20,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        initBalls();

        const handleThemeChange = () => {
            initBalls();
        };

        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY + window.scrollY,
            };
        };

        const handleScroll = () => {
            scrollOffsetRef.current = window.scrollY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        // Periodically update canvas height for dynamic content (every 3 seconds)
        const newHeight = Math.max(
            window.innerHeight + 500,
            document.documentElement.scrollHeight + 3900,
            document.body.scrollHeight + 3900
        );
        // Only increase height, never decrease (prevents crashes)
        if (newHeight > canvas.height) {
            canvas.height = newHeight;
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ballsRef.current.forEach((ball) => {
                const dx = mouseRef.current.x - ball.x;
                const dy = mouseRef.current.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 10;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    ball.vx -= Math.cos(angle) * force * 0.5;
                    ball.vy -= Math.sin(angle) * force * 0.5;
                }

                const scrollInfluence = (scrollOffsetRef.current - ball.baseY) * 0.0003;
                ball.vy += scrollInfluence;

                ball.vx *= 0.98;
                ball.vy *= 0.98;

                const returnForce = 0.00092;
                ball.vx += (ball.baseX - ball.x) * returnForce;
                ball.vy += (ball.baseY - ball.y) * returnForce;

                ball.x += ball.vx;
                ball.y += ball.vy;

                // Validate and clamp positions
                if (!isFinite(ball.x) || !isFinite(ball.y)) {
                    ball.x = ball.baseX;
                    ball.y = ball.baseY;
                    ball.vx = 0;
                    ball.vy = 0;
                }

                const margin = ball.radius;
                ball.x = Math.max(margin, Math.min(canvas.width - margin, ball.x));
                ball.y = Math.max(margin, Math.min(canvas.height - margin, ball.y));

                const gradient = ctx.createRadialGradient(
                    ball.x,
                    ball.y,
                    0,
                    ball.x,
                    ball.y,
                    ball.radius
                );
                gradient.addColorStop(0, ball.color);

                ctx.beginPath();
                ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            // clearInterval(heightUpdateInterval);
            observer.disconnect();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="animated-balls-canvas" />;
};

export default AnimatedBalls;
