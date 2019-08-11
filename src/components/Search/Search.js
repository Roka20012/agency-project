import React from "react";
import SearchField from "./SearchFields";
import Type from "./Type";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            search: {
                minPrice,
                maxPrice,
                minBathrooms,
                maxBathrooms,
                minKitchens,
                maxKitchens,
                minBeds,
                maxBeds,
                minArea,
                maxArea,
                action
            },
            handleChange,
            handleSubmit
        } = this.props;
        return (
            <section className="search">
                <div className="wrapper">
                    <span className="arrow" />
                    <form action="#" onSubmit={handleSubmit}>
                        <SearchField
                            title="Price"
                            name1="Min. Price"
                            name2="Max. Price"
                            values={{ val1: minPrice, val2: maxPrice }}
                            handleProperties={{
                                prop1: "minPrice",
                                prop2: "maxPrice"
                            }}
                            handleChange={handleChange}
                        />
                        <SearchField
                            title="Bathrooms"
                            name1="Min. Bathrooms"
                            name2="Max. Bathrooms"
                            values={{
                                val1: minBathrooms,
                                val2: maxBathrooms
                            }}
                            handleProperties={{
                                prop1: "minBathrooms",
                                prop2: "maxBathrooms"
                            }}
                            handleChange={handleChange}
                        />
                        <SearchField
                            title="Kitchens"
                            name1="Min. Kitchens"
                            name2="Max. Kitchens"
                            values={{
                                val1: minKitchens,
                                val2: maxKitchens
                            }}
                            handleProperties={{
                                prop1: "minKitchens",
                                prop2: "maxKitchens"
                            }}
                            handleChange={handleChange}
                        />
                        <SearchField
                            title="Beds"
                            name1="Min. Beds"
                            name2="Max. Beds"
                            values={{ val1: minBeds, val2: maxBeds }}
                            handleProperties={{
                                prop1: "minBeds",
                                prop2: "maxBeds"
                            }}
                            handleChange={handleChange}
                        />
                        <SearchField
                            title="Area"
                            name1="Min. Area"
                            name2="Max. Area"
                            values={{ val1: minArea, val2: maxArea }}
                            handleProperties={{
                                prop1: "minArea",
                                prop2: "maxArea"
                            }}
                            handleChange={handleChange}
                        />
                        <div className="title">Type</div>
                        <Type value={action} handleChange={handleChange} />
                        <button className="apply">Apply</button>
                    </form>
                </div>
            </section>
        );
    }
}
