import React from 'react'
import './login.css'

export default function Login() {
    return (
        <form className="login">
            <label className="login-label" htmlFor="username">
                Calendar ID
            </label>
            <input type="text" placeholder="Email or Phone" className="login-input" id="username" />
            <label className="login-label" htmlFor="password">
                City
            </label>
            <input type="password" placeholder="Password" className="login-input" id="password" />
            <button type="button" className="login-button">
                Enter
            </button>
        </form>
    )
}
