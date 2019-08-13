import React from "react";
import ItemCard from "./ItemCard";
import Menu from "../Home";
import data from "../../mock-api-data.json";

export default props => {
    let itemId = +props.match.params.id;

    const getItem = itemId => {
        let item;
        data.forEach(el =>
            el.forEach(e => {
                if (e.info.id === itemId) {
                    item = e;
                }
            })
        );
        return item;
    };
    console.log("item is", getItem(itemId));

    return (
        <>
            <Menu />
            <h2 className="item-page-title">Item Page</h2>
            <ItemCard info={getItem(itemId)} />
        </>
    );
};
