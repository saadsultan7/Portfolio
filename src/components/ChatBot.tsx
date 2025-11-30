import { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

// Knowledge base from your portfolio
const knowledgeBase = {
    name: "Saad Sultan",
    bio: "I'm a dedicated React and React Native Developer with over years of hands-on experience. I help businesses and startups turn their ideas into powerful, responsive, and user-friendly mobile and web applications.I'm a Software Developer driven by the challenge of crafting impactful web and mobile applications that solve real-world problems and elevate user experiences. Explore my Projects to see what I've been working on.I actively share practical insights and lessons learned from my experience in WEB APP and Mobile APP Development. Connect with me on LinkedIn to stay updated on my latest posts about development and programming.I'm currently working as a Software Developer, open to collaborations and opportunities that let me create value, sharpen my skills, and grow further. If you're looking for someone who can contribute to your team's success, let's connect.",
    contact: {
        email: "saadsultan4004@gmail.com",
        linkedin: "https://www.linkedin.com/in/saad-sultan-25a323298/",
        github: "https://github.com/saadsultan7",
        twitter: "https://x.com/itachi78900?s=08",
        facebook: "https://www.facebook.com/SaadSultan.50000MW?mibextid=ZbWKwL",
        portfolio: "https://portfolio-ecru-two-36.vercel.app/"
    },
    skills: [
        "Frontend/Mobile: React, React Native, JavaScript, Redux, React Navigation, React Native Reanimated, Android Studio, TypeScript",
        "Backend: Python, Django, Node.js, Express.js, C++",
        "Databases: PostgreSQL, MySQL, MongoDB, Firebase",
        "Tools/DevOps: Git, GitHub"
    ],
    projects: [
        {
            title: "Noor Shop",
            type: "Mobile App",
            techStack: ["React Native", "Redux", "Navigation Libraries", "UI Libraries", "Fetch API", "Animations"],
            description: "Cross-platform mobile app (iOS & Android) JWT authentication with secure token storage Product browsing with search, filters, and category navigation Product variations: size, color, quantity selection Cart management and Stripe payment integration Order history and push notifications Frontend built solo with React Native CLI and Redux Toolkit Optimized performance: FlatList pagination, minimal animations, backend WebP images",
            status: "In Progress"
        },
        {
            title: "Food Recipe",
            type: "Mobile App",
            techStack: ["React Native", "React Navigation", "React Native Reanimated", "TheMealDB API"],
            description: " Mobile app built with React Native (iOS & Android) Integrated TheMealDB API for recipes Screens: Welcome, Home, and Recipe Details Navigation handled with React Navigation Animations implemented using React Native Reanimated Lightweight and responsive UI for smooth performance",
        },
        {
            title: "Chatz",
            type: "Mobile App",
            techStack: ["React Native", "Firebase", "MySQL", "Google Auth"],
            description: " Mobile messaging app similar to WhatsApp Backend powered by Firebase for storing users and messages Signup via Google verification or email Local user data storage implemented with MySQL Built with React Native for smooth, cross-platform performance",
        },
        {
            title: "Parchi",
            type: "Mobile App",
            techStack: ["React Native", "Python", "Django", "PostgreSQL", "Redux"],
            description: "Point of Sale application for multiple types of vendors Frontend built with React Native; backend in Python Django; PostgreSQL database State management with Redux Features include Bluetooth printer integration, camera integration, and more Optimized for smooth performance on mobile devices",
        },
        {
            title: "HIFZ Tracking",
            type: "Web App",
            techStack: ["React", "Node.js", "SWR-3"],
            description: "Web application for tracking Hifz progress and managing students Features include assignments, attendance, messaging, and notice board Voice transfer feature for submitting recitations (stored with SWR-3) Admin panel for managing students, teachers, and content Frontend built with React; backend provided in Node.js Real-time notifications and updates",
            link: "https://hifztrackerui.onrender.com/"
        },
        {
            title: "Final Year Project",
            type: "Web App",
            techStack: ["MERN Stack (MongoDB, Express, React, Node)", "Web Socket", "Stripe"],
            description: "Final Year Project built on MERN Stack (MongoDB, Express, React, Node.js) Real-time messaging using WebSockets Stripe payment integration for services Teacher profiles and student posts Admin panel for managing users and content Advanced filter system: find the best teacher or job efficiently Designed for smooth UX and responsive performance"
        },
        {
            title: "PAB",
            type: "Web App",
            techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux"],
            description: "Platform for anesthesiology students to prepare for board exams Over 1,000+ questions with multiple question types and progress tracking Mock tests and performance analytics Subscription-based with free trial; payments via Zoho Authentication: JWT tokens, Google & Apple login Frontend state managed with Redux Responsive and intuitive UI for seamless exam preparation",
            link: "https://www.pabsmartprep.com/"
        },
        {
            title: "Umrah Portal",
            type: "Web App",
            techStack: ["SaaS", "Web Technologies"],
            description: "SaaS platform for travel agencies to manage customers, packages, and bookings Handles visa processing, flight & hotel arrangements, payment tracking, and customer communication Multi-user roles: Admin and Agent Analytics dashboards and automated notifications for better workflow Built as a complete web application with a focus on efficiency and usability",
            link: "https://www.group2travel.com/"
        }
    ],
    experience: [
        {
            title: "Freelancer as a Mobile App Developer",
            company: "Upwork",
            startDate: "June 2023",
            endDate: "May 2024",
            description: "Started my journey as a freelancer, delivering various mobile and web solutions for diverse clients.",
            projects: "Partner App, Ecommerce, Chatz, Food Recipe"
        },
        {
            title: "Intern React & React Native Dev",
            company: "MAAQ Services",
            startDate: "June 2024",
            endDate: "Jan 2025",
            description: "Gained hands-on experience in a professional environment, contributing to key projects and enhancing skills in React and react native ecosystem.",
            projects: "PABSmart, Parchi"
        },
        {
            title: "React & React Native Dev",
            company: "Saudi Arabia Software House",
            startDate: "Feb 2025",
            endDate: "Present",
            description: "Working remotely as a full-time developer, focusing on building scalable web and mobile applications for international clients.",
            projects: "Hifz Tracking, Umrah Portal"
        }
    ]
};

const API_KEY = "AIzaSyDbR7n8czcQfwIRq00uaiXiGu952TgV6pM";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
const MAX_HISTORY = 50;

const systemPrompt = `You are a helpful, friendly, and professional AI Assistant for ${knowledgeBase.name}.
Your primary goal is to answer all user questions. You must first check the provided JSON knowledge base for questions about ${knowledgeBase.name} (e.g., projects, skills, bio). Use the Google Search tool only when the query is about general knowledge (e.g., current events, facts, definitions, or anything outside of ${knowledgeBase.name}'s professional life).
Prioritize the Knowledge Base for personal questions and Search for general questions.
If the answer is not available in the knowledge base, and Search is needed, use the search tool.
Knowledge Base: ${JSON.stringify(knowledgeBase)}`;

interface Message {
    text: string;
    sender: 'user' | 'ai';
    timestamp: number;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hello! I am the AI assistant for Saad Sultan. How can I help you today?",
            sender: 'ai',
            timestamp: Date.now()
        }
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
                            timestamp: Date.now()
                        },
                        ...history
                    ]);
                }
            } catch (e) {
                console.error('Failed to load chat history:', e);
            }
        }
    }, []);

    // Save messages to localStorage
    useEffect(() => {
        if (messages.length > 1) {
            const historyToSave = messages.slice(1); // Remove initial greeting
            try {
                localStorage.setItem('chatHistory', JSON.stringify(historyToSave.slice(-MAX_HISTORY)));
            } catch (e) {
                console.error('Failed to save chat history:', e);
            }
        }
    }, [messages]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    const parseMarkdown = (text: string) => {
        // Simple markdown parsing
        let html = text;

        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

        // Line breaks
        html = html.replace(/\n/g, '<br>');

        return html;
    };

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            text: inputValue,
            sender: 'user',
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // Build conversation history
            const recentHistory = messages.slice(-10);
            const contents = [];

            recentHistory.forEach(msg => {
                if (msg.sender === 'user') {
                    contents.push({
                        role: 'user',
                        parts: [{ text: msg.text }]
                    });
                } else if (msg.sender === 'ai') {
                    const cleanText = msg.text.replace(/<[^>]*>/g, '').replace(/Sources:.*$/s, '').trim();
                    if (cleanText && cleanText !== "Hello! I am the AI assistant for Saad Sultan. How can I help you today?") {
                        contents.push({
                            role: 'model',
                            parts: [{ text: cleanText }]
                        });
                    }
                }
            });

            contents.push({
                role: 'user',
                parts: [{ text: inputValue }]
            });

            const payload = {
                contents: contents,
                systemInstruction: { parts: [{ text: systemPrompt }] },
                tools: [{ "google_search": {} }],
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();
            let aiResponse = result.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I was unable to process that request.";

            // Extract sources if available
            const groundingMetadata = result.candidates?.[0]?.groundingMetadata;
            const sources = groundingMetadata?.groundingAttributions
                ?.map((attr: any) => ({
                    uri: attr.web?.uri,
                    title: attr.web?.title,
                }))
                .filter((source: any) => source.uri && source.title);

            if (sources && sources.length > 0) {
                aiResponse += '\n\n**Sources:**\n';
                sources.slice(0, 3).forEach((source: any) => {
                    aiResponse += `- [${source.title}](${source.uri})\n`;
                });
            }

            const aiMessage: Message = {
                text: aiResponse,
                sender: 'ai',
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            const errorMessage: Message = {
                text: "I'm sorry, I encountered an error while processing your request. Please try again.",
                sender: 'ai',
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        if (confirm('Are you sure you want to clear the chat history?')) {
            localStorage.removeItem('chatHistory');
            setMessages([
                {
                    text: "Hello! I am the AI assistant for Saad Sultan. How can I help you today?",
                    sender: 'ai',
                    timestamp: Date.now()
                }
            ]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Speed Dial Button */}
            <button
                className={`chatbot-speed-dial ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className="chatbot-popup">
                    {/* Header */}
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

                    {/* Messages */}
                    <div className="chatbot-messages" ref={chatMessagesRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`chatbot-message-wrapper ${msg.sender}`}>
                                <div
                                    className={`chatbot-message ${msg.sender}`}
                                    dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.text) }}
                                />
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chatbot-message-wrapper ai">
                                <div className="chatbot-message ai chatbot-loading">
                                    <div className="chatbot-typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="chatbot-input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your question here..."
                            disabled={isLoading}
                            className="chatbot-input"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || !inputValue.trim()}
                            className="chatbot-send-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
