import "./Sidebar.css";
import ChatIcon from "./ui/ChatIcon";

const chats = ["chat1", "chat2", "chat3"];

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <p>Current Chat Rooms</p>
            </div>

            {chats.map((chat, index) => (
                <div key={index} className="chats">
                    <ChatIcon chatroomId={chat} />
                </div>
            ))}

            <div className="footer">
                <p>Join a Chat Room</p>
            </div>
        </div>
    );
}

export default Sidebar;
