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
                    <input id="name" type="text" placeholder="NAME" />
                    <input id="email" type="text" placeholder="E-MAIL" />
                    <textarea id="message" type="text" placeholder="MESSAGE" />
                    <button>Send</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
