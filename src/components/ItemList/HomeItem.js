import React from "react";
import Image from "../../img/property_2.jpg";

export default props => {
    let countryName;
    const {
        img,
        price,
        description,
        info: { kitchen, bed, bath, area, action, country }
    } = props;

    if (country === "ua") {
        countryName = "Ukraine";
    } else {
        countryName = "Russia";
    }

    return (
        <div className="item">
            <img
                className="item-img"
                src={Image}
                style={{ width: "300px", height: "300px" }}
                alt="item-img"
            />
            <p className="description">{description}</p>
            <span className="item-details">
                {kitchen} kitchens, {bed} beds, {bath} bathrooms... {area}
                ftsq
            </span>
            <p className="item-details">Country {countryName}</p>
            <span className="price">
                Price ${price} for {action}
            </span>
        </div>
    );
};
