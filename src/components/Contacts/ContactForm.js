import React from "react";
import Contact from "./Contact";
import { Header } from "../Home";
import Map from "../Map";

export default () => (
    <>
        <section className="hero" style={{ fontFamily: "Roboto" }}>
            <Map />
            <Header />

            <Contact />
        </section>
    </>
);
