"use client"

import { useState } from "react";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            console.log("error")
            setError("Please fill in all fields");
            return;
        }
        try {
            setLoading(true);
            const response  = await fetch('api/auth', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login Failed");
            }
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-violet-200 to-sky-500">
        <div className="flex flex-col md:flex-row  justify-center bg-white p-8 rounded-lg shadow-md w-fill max-w-4xl">
            <div className="w-full md:w-1/2 relative mr-8 mb-8 md:mb-0">
                <div className="border border-gray-700 rounded-xl overflow-hidden">
                    <img
                        src="https://pokemon.wingzero.tw/assets/pokemon/025.png"
                        alt="Pikachu Picture"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                    <label className="block text-gray-700 py-2">Email:</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 py-2">Password:</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-700"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                        {loading ? "Logging In..." : "Login"}
                    </button>
                    {error && <p className="w-full text-center text-red-500 py-2">{error}</p>}
                </form>
            </div>
        </div>     
    </div>
}

export default LoginForm;