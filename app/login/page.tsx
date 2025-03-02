"use client";

import { login } from "@/services/authService";
import React, { useState } from "react";

interface UserLoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<UserLoginProps>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(user);
      setMessage(response.message);
    } catch (error: any) {
      setMessage(error.error || "Login failed");
    }
  };

  return (
    <div className="text-black">
      <h2>Login</h2>
      <form className="space-y-5" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit" className="bg-white p-3">
          Login
        </button>
        <p className="text-white">{message}</p>
      </form>
    </div>
  );
};

export default Login;
