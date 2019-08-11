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
                action: "all"
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

    itemFilter = (apiData, filterData) => {
        console.log("apiData %d, filteData %d", apiData, filterData);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.itemFilter(apiData, this.state.search);
        //Todo: якщо фільтр змінився перерендуррюємо ліст якщо не то не ))
        //Todo Pagination
        /*       let HomeList;
        if(filter change) {
            HomeList = <HomeList filter={search} data={apiData} key={0} />;
        } else {
            do nothing
            return null
        } */
    };

    render() {
        const { search } = this.state;
 
        return (
            <>
                <Main />
                <Search search={search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <HomeList filter={search} data={apiData} key={0} />
            </>
        );
    }
}
