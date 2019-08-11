import React from "react";
import FormItem from "./FormItem";
import "./Sell.css";

export default () => (
    <div className="form-container">
        <h2 className="title-sell">Sell Home</h2>
        <form action="#">
            <FormItem type="email" name="email" title="Email" />
            <FormItem type="number" name="price" title="Price" />
            <FormItem type="number" name="price" title="Kitchens" />
            <FormItem type="number" name="price" title="Beds" />
            <FormItem type="number" name="price" title="Bathrooms" />
            <FormItem type="number" name="price" title="Area" />
            <label>
                <span className="type">Type</span>
                <select id="types" name="type" placeholder="fdref">
                    <option value="sell">Sell</option>
                    <option value="rent">Buy</option>
                </select>
            </label>
            <label>
                <textarea
                    name="description"
                    id="21"
                    cols="30"
                    rows="10"
                    placeholder="Description"
                />
            </label>
            <button>Submit</button>
        </form>
    </div>
);
