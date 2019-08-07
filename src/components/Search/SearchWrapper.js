import React from 'react';

export default () => (
    <div className="wrapper">
        <form action="#" method="post">
            <input type="text" id="search" name="search" placeholder="What are you looking for?"  autoComplete="off"/>
            <input type="submit" id="submit_search" name="submit_search"/>
        </form>
        <button className="advanced_search_icon" id="advanced_search_btn"></button>
    </div>
)