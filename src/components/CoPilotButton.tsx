import React, { useState, useEffect } from "react";

const CoPilotButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load OpenAI API key from .env
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Toggle chat window visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Send message to OpenAI API
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      if (!apiKey) {
        throw new Error("OpenAI API key is missing. Please check your .env file for VITE_OPENAI_API_KEY.");
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const botMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    const chatArea = document.getElementById("chat-area");
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Button to toggle chat window */}
      <button
        type="button"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full shadow-lg text-base font-semibold bg-royalgold text-midnight hover:shadow-glow-gold transition-all duration-300 animate-fade-in"
        style={{ border: "2px solid #010c43" }}
        aria-label="Open Co-Pilot chat"
      >
        🧭 Ask the Co-Pilot
      </button>

      {/* Chat window pop-up */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col animate-fade-in">
          {/* Chat header */}
          <div className="flex justify-between items-center p-3 bg-royalgold text-midnight rounded-t-lg">
            <h3 className="text-lg font-semibold">Co-Pilot Chat</h3>
            <button
              onClick={toggleChat}
              className="text-midnight hover:text-gray-700"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat messages area */}
          <div
            id="chat-area"
            className="flex-1 p-3 overflow-y-auto"
            style={{ backgroundColor: "#f9fafb" }}
          >
            {messages.length === 0 && (
              <p className="text-gray-500 text-center">Start chatting with Co-Pilot!</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-royalgold text-midnight ml-auto"
                    : "bg-gray-200 text-gray-800 mr-auto"
                } max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <p className="text-gray-500 text-center">Co-Pilot is thinking...</p>
            )}
          </div>

          {/* Input form */}
          <form onSubmit={sendMessage} className="p-3 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-royalgold"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-3 py-2 bg-royalgold text-midnight rounded-lg hover:bg-yellow-500 disabled:opacity-50"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CoPilotButton;