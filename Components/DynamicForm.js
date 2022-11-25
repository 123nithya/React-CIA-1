import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import './DynamicForm.css';

export default function Form() {
    const [password, setPassword] = useState('');
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="card">
                <div>
                    <label>Enter your username:</label>
                    <input
                        placeholder="your Username"
                        {...register("name", { required: true })}
                    />
                    <error>
                        {errors.name?.type === "required" && "Please Fill the Column"}
                    </error>
                </div>
                <div>
                    <label>Enter your Email</label>
                    <input
                        placeholder="Your email"
                        {...register("email", {
                            required: true
                        })}
                    />
                    <error>
                        {errors.email?.type === "required" && "Email is required"}
                    </error>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <PasswordStrengthMeter password={password} />

                </div>
            </form>
        </div>
    );
}