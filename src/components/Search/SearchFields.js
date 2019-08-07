import React from 'react';

export default ({title, name1, name2, values: {val1, val2}, handleChange, handleProperties: {prop1, prop2} }) => (
    <div className="search_fields">
        <div className="title">{title}</div>
        <input type="number" className="float" id="min_price" name="min_price" 
        onChange={handleChange(prop1)}  placeholder={name1} value={val1}  autoComplete="off"/>
        <hr className="field_sep float"/>
        <input type="number" className="float" id="max_price" name="max_price" 
        onChange={handleChange(prop2)} placeholder={name2} value={val2} autoComplete="off"/>
    </div>
);
