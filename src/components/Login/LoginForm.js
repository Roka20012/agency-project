import React from "react";
import { Header } from "../Home";
import Login from "./Login";

export default () => (
    <section
        className="hero"
        style={{ fontFamily: "Roboto" }}
    >
        <Header />
        <Login />
    </section>
);
