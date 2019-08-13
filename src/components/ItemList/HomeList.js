import React from "react";
import HomeItem from "./HomeItem";
import "./HomeList.css";
import { Link } from "react-router-dom";

export default ({ data }) => (
    <section className="item-list">
        {data.map(homeInfo => (
            <Link to={`/buy/${homeInfo.info.id}`} key={homeInfo.info.id}><HomeItem {...homeInfo} key={homeInfo.info.id} /></Link>
        ))}
    </section>
);
