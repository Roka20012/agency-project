import React from "react";
import HomeItem from "./HomeItem";
import "./HomeList.css";


export default ({ data }) => (
    <section className="item-list">
        {data.map(homeInfo => (
            <HomeItem {...homeInfo} key={homeInfo.info.id} />
        ))}
    </section>
);
