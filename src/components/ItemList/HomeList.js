import React from "react";
import HomeItem from "./HomeItem";

export default ({ data, filter }) => (
    <section className="listings">
        <div className="wrapper">
            <ul className="properties_list">
                {console.log("filter", filter)}
                {data.map(homeInfo => (
                    <HomeItem
                        {...homeInfo}
                        filter={filter}
                        key={homeInfo.info.id}
                    />
                ))}
            </ul>
        </div>
    </section>
);
