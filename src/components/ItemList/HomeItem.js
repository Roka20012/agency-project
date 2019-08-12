import React from "react";
import Image from "../../img/property_2.jpg";
import ItemPage from "../ItemPage";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showItemPage: false
        };
    }

    handleShowItemPage = e => {
        this.setState({
            showItemPage: !this.state.showItemPage
        });
    };

    render() {
        let countryName;
        const {
            img,
            price,
            description,
            info: { kitchen, bed, bath, area, action, country, id }
        } = this.props;
        const { showItemPage } = this.state;

        if (country === "ua") {
            countryName = "Ukraine";
        } else {
            countryName = "Russia";
        }
        return (
            <>
                {showItemPage ? (
                    <ItemPage info={this.props} handleShowItemPage={this.handleShowItemPage}/>
                ) : (
                    <div className="item" onClick={this.handleShowItemPage}>
                        <img
                            className="item-img"
                            src={Image}
                            style={{ width: "300px", height: "300px" }}
                            alt="item-img"
                        />
                        <p className="description">{description}</p>
                        <span className="item-details">
                            {kitchen} kitchens, {bed} beds, {bath} bathrooms...{" "}
                            {area}
                            ftsq
                        </span>
                        <p className="item-details">Country {countryName}</p>
                        <span className="price">
                            Price ${price} for {action}
                        </span>
                    </div>
                )}
            </>
        );
    }
}
