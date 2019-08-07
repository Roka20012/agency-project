import React from 'react';

export default class extends React.Component {
  render() {
    const {value, handleChange} = this.props;
    return (
      <div className="home-type">
          <label><input type="radio" checked={value === 'all'} onChange={handleChange("action")} value="all" /> All</label>
          <label><input type="radio" checked={value === 'buy'} onChange={handleChange("action")} value="buy" /> Buy</label> 
          <label ><input type="radio" checked={value === 'rent'} onChange={handleChange("action")} value="rent" /> Rent</label>
      </div>
    );
  }
}
