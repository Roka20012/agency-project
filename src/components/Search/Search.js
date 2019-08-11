import React from "react";
import SearchField from "./SearchFields";
import Type from "./Type";
import "./Search.css";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false
        }
    }

    handleCheck = () => (
        this.setState({
            check: !this.state.check
        })
    ) 

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
                action,
                country
            },
            handleChange,
            handleSubmit
        } = this.props;
        const {check} = this.state;
        return (
            <section className="search">
                <label htmlFor="burger" className="buy-something-label">
                    Filter
                </label>
                <input className="burger-menu" type="checkbox" id="burger" checked={check} onClick={this.handleCheck}/>
                <div className="wrapper show-buying-window">
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
                        <Type value={action} handleChange={handleChange} changeProp={"action"} info={{title: ["Buy", "Rent"], type: ["buy", "rent"]}}/>
                        <div className="title">Country</div>
                        <Type value={country} handleChange={handleChange} changeProp={"country"} info={{title: ["Ukraine", "Russia"], type: ["ua", "ru"]}}/>
                        <div className="button-container">
                            <button className="apply" onClick={this.handleCheck}>Apply</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
