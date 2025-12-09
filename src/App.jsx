import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("Welcome!");

    const handleClick = () => {
        setMessage(`Hello, ${name || "Guest"}!`);
    };

    return (
        <div className="container">
            <h1>My React + Vite Project</h1>

            <input
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleClick}>Submit</button>

            <p className="msg">{message}</p>
        </div>
    );
}

export default App;
