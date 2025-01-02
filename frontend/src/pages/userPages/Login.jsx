import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError("Both fields are required.");
            toast.error("Both fields are required!", {
                position: "top-center", // Centering the toast
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        // Handle login logic (API calls, etc.)
        console.log("Login data submitted:", formData);

        // Clear error and show success toast
        setError("");
        toast.success("Logged in successfully!", {
            position: "top-center", // Centering the toast
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mt-10">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                Login to Your Account
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                    />
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none"
                >
                    Login
                </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                    Register
                </a>
            </p>

            {/* Toast Container */}
            <ToastContainer
                position="top-center" // Setting the toast position to center
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Login;
