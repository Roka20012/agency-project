import React from 'react';

export default ({title, name1, name2, values: {val1, val2}, handleChange, handleProperties: {prop1, prop2} }) => (
    <div className="search-fields">
        <div className="title  title-of-form">{title}</div>
        <div className="items">
            <input type="number" className="item" name="minPrice" 
                    onChange={handleChange(prop1)}  placeholder={name1} value={val1}  autoComplete="off"/>
            <input type="number" className="item"  name="maxPrice" 
            onChange={handleChange(prop2)} placeholder={name2} value={val2} autoComplete="off"/>
        </div>
    </div>
);
