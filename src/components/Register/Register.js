import React from "react";
import { Link } from "react-router-dom";

export default () => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="login-page">
            <div className="form">
                <form action="#" className="login-form" onClick={onSubmit}>
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message">
                        Already registered?
                        <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
