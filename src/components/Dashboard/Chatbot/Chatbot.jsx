"use client";

import ChatBot from "react-chatbot-kit"; // chatbot library
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Chatbot.css";

export default function ChatbotComponent() {
  return (
    <div className="chatbot-container">
      <ChatBot
        config={config} //config or setting for the chatbot
        messageParser={MessageParser} // Handles understanding user input
        actionProvider={ActionProvider} // handle chatbot response and action
      />
    </div>
  );
}
