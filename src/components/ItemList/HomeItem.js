import React from "react";

export default props => {
    const {
        img,
        price,
        description,
        info: { kitchen, bed, bath, area, action },
        filter: { minPrice, maxPrice, minBathrooms, maxBathrooms, minBeds, maxBeds, minKitchens, maxKitchens, minArea, maxArea, action: act }
    } = props;

    

    return (
        <li>
            <a href="#">
                <img
                    src={require(`../../img/property_1.jpg`)}
                    alt="home"
                    title=""
                    className="property_img"
                />
            </a>
            <span className="price">
                ${price} [for {action}]
            </span>
            <div className="property_details">
                <h1>
                    <a href="#">{description}</a>
                </h1>
                <h2>
                    {kitchen} kitchens, {bed} bed,{bath} bath...{" "}
                    <span className="property_size">{area}ftsq</span>
                </h2>
            </div>
        </li>
    );
};
