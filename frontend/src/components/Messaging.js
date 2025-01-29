import { useState } from "react";
import "./Messaging.css";

function Messaging() {
    const [messages, setMessages] = useState([]); // Stores all messages
    const [input, setInput] = useState(""); // Input field state

    const sendMessage = () => {
        if (input.trim() === "") return; // Prevent empty messages
        setMessages([...messages, { text: input, sender: "You" }]); // Append new message
        setInput(""); // Clear input field
    };

    return (
        <div className="messaging-container">
            <div className="messages-window">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
                            <strong>{msg.sender}: </strong> {msg.text}
                        </div>
                    ))
                ) : (
                    <p className="empty-chat">No messages yet. Start the conversation!</p>
                )}
            </div>

            <div className="message-input-container">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Messaging;
