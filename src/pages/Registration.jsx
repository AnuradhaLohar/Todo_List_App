import React, { useState } from "react";
import { account } from "../appWrite/DbConfig";

const Register = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await account.create("unique()", form.email, form.password, form.name);
            alert("Account created! Now log in.");
            window.location.href = "/login";
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleRegister} className="p-4 flex flex-col gap-2">
            <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
