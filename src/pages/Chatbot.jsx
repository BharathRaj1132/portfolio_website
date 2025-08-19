import React, { useState } from "react";
import "../styles/chatbot.css";
import { getBotReply } from "../utils/chatbotEngine";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me about my skills, projects, or experience.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    const userMessage = { text: userText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Typing indicator
    setIsTyping(true);

    // Simulate latency for a natural feel
    setTimeout(() => {
      const botText = getBotReply(userText);
      const botReply = { text: botText, sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      <div className={`chatbot-wrapper ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="chatbot-container">
            <div className="chatbot-header">
              About Bharath — Chat
              <span onClick={() => setIsOpen(false)} className="close-btn">✖</span>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && <div className="message bot typing">typing…</div>}
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>

      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </>
  );
};

export default Chatbot;
