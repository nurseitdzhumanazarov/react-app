import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import "./App.css";

export default function App() {
    const [logged, setLogged] = useState(false);
    const [adminPage, setAdminPage] = useState(false);

    if (!logged) return <Login onLogin={() => setLogged(true)} />;

    return (
        <div>
            <button onClick={() => setAdminPage(false)}>Menu</button>
            <button onClick={() => setAdminPage(true)}>Admin</button>

            {adminPage ? <Dashboard /> : <Menu />}
        </div>
    );
}
