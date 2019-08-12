import React from "react";
import Main from "../Home";
import Search from "../Search";
import Pagination from "../Pagination";
import "../ItemList/HomeList.css";

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
                action: "all",
                country: "all"
            },
            data: apiData,
            pageCount: apiData.length,
            currentPage: 1
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
        let allItemList = [];
        let itemList = [];

        apiData.forEach((element, index, arr) => {
            element.forEach((el, index2, arr2) => {
                let { info, price } = el;
                let flag = true;

                if (filterData.action !== "all") {
                    if (info.action !== filterData.action) {
                        flag = false;
                    }
                }

                if (filterData.country !== "all") {
                    if (info.country !== filterData.country) {
                        flag = false;
                    }
                }

                if (
                    (filterData.minPrice !== "" ||
                        filterData.maxPrice !== "") &&
                    (filterData.minPrice >= price ||
                        filterData.maxPrice <= price)
                ) {
                    flag = false;
                }

                for (let key in info) {
                    switch (key) {
                        case "kitchen":
                            if (
                                (filterData.minKitchens !== "" ||
                                    filterData.maxKitchens !== "") &&
                                (filterData.minKitchens >= info[key] ||
                                    filterData.maxKitchens <= info[key])
                            ) {
                                flag = false;
                            }
                            break;
                        case "bath":
                            if (
                                (filterData.minBathrooms !== "" ||
                                    filterData.maxBathrooms !== "") &&
                                (filterData.minBathrooms >= info[key] ||
                                    filterData.maxBathrooms <= info[key])
                            ) {
                                flag = false;
                            }
                            break;
                        case "bed":
                            if (
                                (filterData.minBeds !== "" ||
                                    filterData.maxBeds !== "") &&
                                (filterData.minBeds >= info[key] ||
                                    filterData.maxBeds <= info[key])
                            ) {
                                flag = false;
                            }
                            break;
                        case "area":
                            if (
                                (filterData.minArea !== "" ||
                                    filterData.maxArea !== "") &&
                                (filterData.minArea >= info[key] ||
                                    filterData.maxArea <= info[key])
                            ) {
                                flag = false;
                            }
                            break;
                        default:
                            break;
                    }
                }

                if (flag) {
                    itemList.push(el);
                }

                if (
                    itemList.length === 9 ||
                    (arr.length === index + 1 &&
                        arr2.length === index2 + 1 &&
                        itemList.length !== 0)
                ) {
                    allItemList = [...allItemList, itemList];
                    itemList = [];
                }
            });
        });
        console.log("allItemList", allItemList);
        this.setState({
            search: {
                ...this.state.search
            },
            data: allItemList,
            pageCount: allItemList.length - 1,
            currentPage: 1
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.itemFilter(apiData, this.state.search);
    };

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });
    };

    render() {
        const { search, data, pageCount, currentPage } = this.state;
        console.log("search is ", search);

        return (
            <>
                <Main />
                <Search
                    search={search}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <Pagination
                    data={data}
                    pageCount={pageCount}
                    startPage={1}
                    handlePageChange={this.handlePageChange}
                    currentPage={currentPage}
                />
            </>
        );
    }
}
