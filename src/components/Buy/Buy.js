import React from "react";
import Main from "../Home";
import HomeList from "../ItemList";
import Search from "../Search";
import Pagination from "../Pagination";


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
            },
            data: apiData
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
        let itemList = [];

        apiData.forEach(el => {
            let { info, price } = el;
            let flag = true;

            if (filterData.action !== "all") {
                if (info.action !== filterData.action) {
                    flag = false;
                }
            }

            if (
                !(
                    filterData.minPrice <= price && filterData.maxPrice >= price
                ) &&
                filterData.maxPrice !== ""
            ) {
                flag = false;
            }

            for (let key in info) {
                switch (key) {
                    case "kitchen":
                        if (
                            !(
                                filterData.minKitchens <= info[key] &&
                                filterData.maxKitchens >= info[key]
                            ) &&
                            filterData.maxKitchens !== ""
                        ) {
                            flag = false;
                        }
                        break;
                    case "bath":
                        if (
                            !(
                                filterData.minBathrooms <= info[key] &&
                                filterData.maxBathrooms >= info[key]
                            ) &&
                            filterData.maxBathrooms !== ""
                        ) {
                            flag = false;
                        }
                        break;
                    case "bed":
                        if (
                            !(
                                filterData.minBeds <= info[key] &&
                                filterData.maxBeds >= info[key]
                            ) &&
                            filterData.maxBeds !== ""
                        ) {
                            flag = false;
                        }
                        break;
                    case "area":
                        if (
                            !(
                                filterData.minArea <= info[key] &&
                                filterData.maxArea >= info[key]
                            ) &&
                            filterData.maxArea !== ""
                        ) {
                            flag = false;
                        }
                        break;
                }
            }

            if (flag) {
                itemList.push(el);
            }
        });
        this.setState({
            search: {
                ...this.state.search
            },
            data: itemList
        });
    };

    handleSubmit = e => {
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
        const { search, data } = this.state;

        return (
            <>
                <Main />
                <Search
                    search={search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {/* <HomeList data={data} key={0} /> */}
                <Pagination data={data}/>
            </>
        );
    }
}
