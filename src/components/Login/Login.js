import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default () => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="login-page">
            <div className="form">
                <form action="#" className="login-form" onClick={onSubmit}>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className="message">
                        Not registered?
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
