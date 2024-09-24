import axios from "axios";

const API_URL = "https://backendapp2-6vkjczwu.b4a.run/api/users/";

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData); // Corrected URL and parameter

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

const logout = () => localStorage.removeItem('user');

const authService = { register, logout, login };
export default authService;
