import React from "react";
import "./Slider.css";

export default () => (
    <div id="slider-wrapper">
        <div className="inner-wrapper">
            <input
                checked
                type="radio"
                name="slide"
                className="control"
                id="Slide1"
            />
            <label for="Slide1" id="s1" />
            <input type="radio" name="slide" className="control" id="Slide2" />
            <label for="Slide2" id="s2" />
            <input type="radio" name="slide" className="control" id="Slide3" />
            <label for="Slide3" id="s3" />
            <input type="radio" name="slide" className="control" id="Slide4" />
            <label for="Slide4" id="s4" />
            <div className="overflow-wrapper">
                <a className="slide" href="">
                    <img src="http://placehold.it/940x470" />
                </a>
                <a className="slide" href="">
                    <img src="http://placehold.it/940x470" />
                </a>
                <a className="slide" href="">
                    <img src="http://placehold.it/940x470" />
                </a>
                <a className="slide" href="">
                    <img src="http://placehold.it/940x470" />
                </a>
            </div>
        </div>
    </div>
);
