'use client';

import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { messages, status, input, handleInputChange, handleSubmit } = useChat() as any;

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Derive isLoading
    const isLoading = status === 'streaming' || status === 'submitted';

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-500 transition-colors"
                aria-label="Toggle Chat"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] md:w-[400px] h-[500px] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gray-800 border-b border-white/5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">MindsSparc AI</h3>
                                <p className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                            {messages.length === 0 && (
                                <div className="text-center text-gray-500 mt-10">
                                    <p className="text-sm">👋 Hi there! asking me anything about MindsSparc.</p>
                                    <p className="text-xs mt-2">Try &quot;What services do you offer?&quot;</p>
                                </div>
                            )}

                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={`flex items-start gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                                        }`}>
                                        {m.role === 'user'
                                            ? <User className="w-3 h-3 text-purple-400" />
                                            : <Bot className="w-3 h-3 text-blue-400" />
                                        }
                                    </div>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                            ? 'bg-purple-600/20 text-white rounded-tr-none border border-purple-500/20'
                                            : 'bg-gray-800 text-gray-200 rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {m.content}
                                        {/* Fallback for 'parts' based messages if content is undefined */}
                                        {!m.content && (m as any).parts && (m as any).parts.map((part: any, i: number) => {
                                            if (part.type === 'text') return <span key={i}>{part.text}</span>;
                                            return null;
                                        })}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2 text-gray-500 text-xs ml-8">
                                    <span className="animate-bounce">●</span>
                                    <span className="animate-bounce delay-100">●</span>
                                    <span className="animate-bounce delay-200">●</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 border-t border-white/5">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your question..."
                                    className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm rounded-full py-3 pl-4 pr-12 border border-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
