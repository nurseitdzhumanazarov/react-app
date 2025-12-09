import { useState } from "react";

export default function Login({ onLogin }) {
    const [pass, setPass] = useState("");

    const correctPass = "nurzait123"; // YOU CAN CHANGE PASSWORD HERE

    const handleLogin = () => {
        if (pass === correctPass) onLogin();
        else alert("Wrong password!");
    };

    return (
        <div className="login">
            <h2>Admin Login</h2>
            <input
                type="password"
                placeholder="Enter password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}
