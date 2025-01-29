import "./ChatIcon.css";

function ChatIcon({ chatroomId }) {
    const online = Math.floor(Math.random() * 10); // Example: Random user count
    const name = chatroomId || "Unknown Chat";

    return (
        <div className="ChatIcon">
            {online > 0 ? (
                <div className="online">{online} Active</div>
            ) : (
                <div className="offline">No Active Users</div>
            )}
            <div className="name">{name}</div>
        </div>
    );
}

export default ChatIcon;
