import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";
import Messaging from "../components/Messaging";

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <Messaging />
        </div>
    );
}

export default Dashboard;
