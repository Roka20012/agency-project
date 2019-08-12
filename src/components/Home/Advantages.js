import React from "react";
import "./Advantages.css";
import Image from "../../img/property_3.jpg";

export default () => (
    <section className="our-advantages">
        <h2>Advantages</h2>
        <div className="advantages">
            <div className="fast">
                <h3>Fast</h3>
                <img style={styles} src={Image} alt="advantages-fast" />
            </div>
            <div className="fast">
                <h3>Fast</h3>
                <img style={styles} src={Image} alt="advantages-fast" />
            </div>
            <div className="fast">
                <h3>Fast</h3>
                <img style={styles} src={Image} alt="advantages-fast" />
            </div>
        </div>
    </section>
);

const styles = {
    width: "300px",
    height: "300px"
};
