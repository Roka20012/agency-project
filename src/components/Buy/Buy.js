import React from "react";
import Main  from "../Home";
import HomeList from "../ItemList";
import Search from "../Search";

import apiData from "../../mock-api-data";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: {
                minPrice: "",
                maxPrice: "",
                minBathrooms: "",
                maxBathrooms: "",
                minKitchens: "",
                maxKitchens: "",
                minBeds: "",
                maxBeds: "",
                minArea: "",
                maxArea: "",
                action: "buy"
            }
        };
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            search: {
                ...this.state.search,
                [name]: value
            }
        });
    };

    render() {
        const { search } = this.state;
        return (
            <>
                <Main />
                <Search search={search} handleChange={this.handleChange} />
                <HomeList filter={search} data={apiData} key={0} />
            </>
        );
    }
}
