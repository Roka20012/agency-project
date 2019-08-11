import React from "react";

export default ({ type, name, title }) => (
    <label>
        <span>{title}</span>
        <input type={type} name={name} />
    </label>
);
