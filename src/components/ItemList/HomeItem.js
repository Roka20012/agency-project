import React from "react";

export default props => {
    const {
        img,
        price,
        description,
        info: { kitchen, bed, bath, area, action },
        filter: {
            minPrice,
            maxPrice,
            minBathrooms,
            maxBathrooms,
            minBeds,
            maxBeds,
            minKitchens,
            maxKitchens,
            minArea,
            maxArea,
            action: act
        }
    } = props;


    console.log("props -> ", props.filter);

    return (
        <div className="item">
            <img
                className="item-img"
                src="https://picsum.photos/300"
                alt="item-img"
            />
            <p className="description">{description}</p>
            <span className="item-details">
                {kitchen} kitchens, {bed} beds, {bath} bathrooms... {area}ftsq
            </span>
            <span className="price">
                Price ${price} for {action}
            </span>
        </div>
    );
};
