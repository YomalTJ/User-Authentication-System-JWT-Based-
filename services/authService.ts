import axios from "axios";
import { headers } from "next/headers";

const API_URL = 'http://localhost:5000/api';

export const register = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error: any) {
        throw error.response?.data || { error: 'Registration failed' };
    }
}

export const login = async (userData: any) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData, {
            headers: { "Content-Type": "application/json" }
        })
        localStorage.setItem('authToken', response.data?.token);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || { error: 'Login failed' };
    }
}

export const getProfileData = async (userData: any) => {
    try {
        const token = localStorage.getItem('authToken');

        if (!token) {
            throw new Error('No token found')
        }

        const response = await axios.get(`${API_URL}/get-profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data;
    } catch (error: any) {
        throw error.response?.data || { error: 'Failed to fetch profile data' }
    }
}