import React from "react";
import HomeItem from "./HomeItem";
import "./HomeList.css";

export default ({ data, filter }) => (
    <section className="item-list">
        {data.map(homeInfo => (
            <HomeItem {...homeInfo} filter={filter} key={homeInfo.info.id} />
        ))}
    </section>
);
