"use client"
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowUp, X, Eye, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import GNayanaAvatar from "./GNayanaAvatar";
import FriendlyBotGreeting from "@/components/GNayana/AnimatedBotGreeting";
import useToast from "@/components/hooks/use-toast";

const API_URL = "http://localhost:7000/chat/";
const WELCOME_MESSAGE_DELAY = 1000;
const POPUP_DELAY = 10000;
const STANDARD_WIDTH = "w-[300px]";
const MAXIMIZED_WIDTH = "w-[500px]";
const OPEN_BOTTOM_OFFSET = "bottom-[5.5rem]";
const MINIMIZED_BOTTOM_OFFSET = "bottom-6";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const GNayanaBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isWidthMaximized, setIsWidthMaximized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const popupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !isChatOpen) setShowGreeting(true);
    }, WELCOME_MESSAGE_DELAY);
    return () => clearTimeout(timer);
  }, [isOpen, isChatOpen]);

  useEffect(() => {
    if (!isOpen) schedulePopup();
    return () => {
      if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    };
  }, [isOpen]);

  const schedulePopup = () => {
    if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    popupTimeoutRef.current = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, POPUP_DELAY);
  };

  const handleSendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now().toString() + "-user",
      text: trimmed,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setIsBotTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: trimmed }),
      });
      const data = await response.json();
      const botText = data["G-Nayan"] ?? data.reply ?? data.text ?? "";
      const botMsg: Message = {
        id: Date.now().toString() + "-bot",
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to get reply.",
        variant: "destructive",
      });
    } finally {
      setIsBotTyping(false);
      inputRef.current?.focus();
    }
  };

  const handleOpenBot = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setShowGreeting(false);
    setIsChatOpen(true);
  };

  const handleCloseBot = () => {
    setIsOpen(false);
    setIsChatOpen(false);
    schedulePopup();
  };

  const handleToggleWidth = () => setIsWidthMaximized((prev) => !prev);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          {showGreeting && (
            <FriendlyBotGreeting onOpenChat={handleOpenBot} isVisible={false} />
          )}
          <Button
            aria-label="Open G-Nayana Chatbot"
            onClick={handleOpenBot}
            className="w-14 h-14 rounded-full bg-blue-900"
          >
            <Eye className="w-7 h-7 text-white" />
          </Button>
        </div>
      )}

      {isOpen && (
        <div
          className={cn(
            "fixed right-6 bg-white rounded-2xl shadow-xl z-50 flex flex-col transition-all overflow-hidden",
            isMinimized
              ? `${MINIMIZED_BOTTOM_OFFSET} w-64 h-16`
              : `${OPEN_BOTTOM_OFFSET} h-[400px] ${
                  isWidthMaximized ? MAXIMIZED_WIDTH : STANDARD_WIDTH
                }`
          )}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GNayanaAvatar size={isMinimized ? "sm" : "md"} />
              {!isMinimized && (
                <h3 className="text-white font-semibold">G-Nayana</h3>
              )}
            </div>
            <div className="flex space-x-1">
              {!isMinimized && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleToggleWidth}
                  className="h-7 w-7 text-white hover:bg-white/20"
                >
                  {isWidthMaximized ? <Minimize2 /> : <Maximize2 />}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseBot}
                className="h-7 w-7 text-white hover:bg-white/20"
              >
                <X />
              </Button>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col grow min-h-0">
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 hover:scrollbar-thumb-blue-300">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn("flex items-end max-w-[85%]", msg.sender === "user" ? "flex-row-reverse" : "flex-row")}
                  >
                    {msg.sender === "bot" && (
                      <GNayanaAvatar size="sm" className="mr-2 mb-1 self-start" />
                    )}
                    <Card
                      className={cn(
                        "p-3 rounded-lg shadow-sm wrap-break-word",
                        msg.sender === "user"
                          ? "bg-cyan-600 text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                      )}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                      <p className="text-xs mt-1 opacity-70 text-right">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </p>
                    </Card>
                  </div>
                </div>
              ))}

              {isBotTyping && (
                <div className="flex items-end mb-4 max-w-[85%]">
                  <GNayanaAvatar size="sm" className="mr-2 mb-1 self-start" />
                  <Card className="p-3 bg-white border border-gray-200 rounded-lg rounded-bl-none shadow-sm">
                    <div className="flex space-x-1">
                      {[0, 200, 400].map((delay) => (
                        <div
                          key={delay}
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t bg-white shrink-0">
              <div className="flex space-x-2 items-center">
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask about eye health..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-teal-600 hover:bg-teal-700 rounded-full w-10 h-10 p-0 flex items-center justify-center disabled:opacity-50"
                  disabled={!message.trim() || isBotTyping}
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GNayanaBot;
