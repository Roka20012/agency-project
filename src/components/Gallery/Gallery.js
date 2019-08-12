import React from "react";
import Image from "../../img/property_2.jpg";
import "./Gallery.css";

export default () => (
    <>
        <h2 className="gallery title">Gallery</h2>
        <div className="gallery">
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
            <img src={Image} alt="item" />
        </div>
    </>
);
