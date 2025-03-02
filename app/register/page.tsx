"use client";

import { register } from "@/services/authService";
import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(user);
      setMessage(response.message);
    } catch (error: any) {
      setMessage(error.error || "Registration Failed");
    }
  };

  return (
    <div className="p-20 text-black text-2xl">
      <form onSubmit={handleRegister} className="space-y-5">
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />{" "}
        <br />
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />{" "}
        <br />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />{" "}
        <br />
        <button type="submit" className="bg-white p-3">
          Register
        </button>{" "}
        <br />
        <p className="text-white">{message}</p>
      </form>
    </div>
  );
};

export default Register;
