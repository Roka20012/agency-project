import React from "react";
import "./ItemPage.css";
import Image from "../../img/property_3.jpg";

export default props => {
    let countryName;
    const {
        img,
        price,
        description,
        info: { kitchen, bed, bath, area, action, country, id }
    } = props.info;
    const { handleShowItemPage } = props;

    if (country === "ua") {
        countryName = "Ukraine";
    } else {
        countryName = "Russia";
    }

    return (
        <>
            <div className="material-product-card" onClick={handleShowItemPage}>
                <div className="img-of-car">
                    <img
                        src={Image}
                        alt="img of merchandise"
                        style={styles}
                    />
                </div>
                <div className="card-content">
                    <h1>Home id: {id}</h1>
                    <ul>
                        <li>
                            <span className="facilities">Bathrooms:</span>
                            <span className="quantity">{bath}</span>
                        </li>
                        <li>
                            <span className="facilities">Beds:</span>
                            <span className="quantity">{bed}</span>
                        </li>
                        <li>
                            <span className="facilities">Kitchens:</span>
                            <span className="quantity">{kitchen}</span>
                        </li>
                        <li>
                            <span className="facilities">Country:</span>
                            <span className="quantity">{country}</span>
                        </li>
                        <li>
                            <span className="facilities">Type:</span>
                            <span className="quantity">{action}</span>
                        </li>
                        <li>
                            <span className="facilities">Area:</span>
                            <span className="quantity">{area}</span>
                        </li>
                    </ul>

                    <p className="">Description:</p>
                    <p className="">{description}</p>

                    <div className="price-and-button">
                        <p className="price-of-product">
                            <span className="value-of-product">{price} </span>
                            <span className="currency">$</span>
                        </p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    width: "300px",
    height: "300px"
}