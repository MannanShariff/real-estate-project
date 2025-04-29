import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        const user = { email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Signup Successful! Please login.");
        navigate("/login");
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Signup</h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password (min 6 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                />

                <button type="submit">Signup</button>
                <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
            </form>
        </div>
    );
};

export default SignupPage;
