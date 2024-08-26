"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Simulated chat data
const initialMessages = [
  {
    id: 1,
    sender: "recruiter",
    content: "Hello! Thanks for your interest in our company.",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    sender: "jobseeker",
    content: "Hi! Im excited to learn more about the position.",
    timestamp: "10:02 AM",
  },
  {
    id: 3,
    sender: "recruiter",
    content: "Great! Could you tell me a bit about your experience?",
    timestamp: "10:05 AM",
  },
  {
    id: 4,
    sender: "jobseeker",
    content:
      "I have 5 years of experience in web development, focusing primarily on front-end technologies. Ive worked on several large-scale projects that required optimizing performance and ensuring cross-browser compatibility.",
    timestamp: "10:08 AM",
  },
  {
    id: 5,
    sender: "recruiter",
    content:
      "That sounds impressive. What technologies are you most familiar with?",
    timestamp: "10:10 AM",
  },
  {
    id: 6,
    sender: "jobseeker",
    content:
      "I m proficient in React, Node.js, and TypeScript. I also have experience with state management libraries like Redux and MobX, and Im comfortable working with RESTful APIs and GraphQL.",
    timestamp: "10:13 AM",
  },
  {
    id: 7,
    sender: "recruiter",
    content:
      "Excellent! Those skills align well with what were looking for. Can you tell me about a challenging project youve worked on recently?",
    timestamp: "10 15 AM",
  },
  {
    id: 8,
    sender: "jobseeker",
    content:
      "In my last role, I led the development of a real-time collaboration tool for remote teams. We faced challenges with WebSocket scalability and ensuring low-latency updates across multiple clients. I implemented a custom state synchronization algorithm that significantly improved performance.",
    timestamp: "10:18 AM",
  },
  {
    id: 9,
    sender: "recruiter",
    content:
      "Thats very interesting! How did you approach testing for this project, especially considering its real-time nature?",
    timestamp: "10:21 AM",
  },
  {
    id: 10,
    sender: "jobseeker",
    content:
      "Testing was crucial for this project. We used Jest for unit and integration tests, and Cypress for end-to-end testing. We also implemented extensive load testing using Artillery to simulate thousands of concurrent users. This helped us identify and resolve performance bottlenecks early in the development process.",
    timestamp: "10:24 AM",
  },
];

export default function Message() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: "jobseeker",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Chat with Recruiter</h1>
        </div>
      </header>

      <ScrollArea className="flex-grow p-4 container mx-auto max-w-4xl">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "jobseeker" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`flex ${
                message.sender === "jobseeker" ? "flex-row-reverse" : "flex-row"
              } items-start max-w-[80%]`}
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={
                    message.sender === "recruiter"
                      ? "/placeholder.svg?height=40&width=40"
                      : "/placeholder.svg?height=40&width=40"
                  }
                />
                <AvatarFallback>
                  {message.sender === "recruiter" ? "R" : "J"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`mx-2 ${
                  message.sender === "jobseeker"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                } rounded-lg p-3`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs text-muted-foreground block mt-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>

      <footer className="border-t bg-background p-4">
        <form
          onSubmit={handleSendMessage}
          className="container mx-auto max-w-4xl"
        >
          <div className="flex">
            <Input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
      </footer>
    </div>
  );
}
