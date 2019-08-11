import React from 'react';

export default class extends React.Component {
  render() {
    const {value, handleChange, info: {type, title}, changeProp} = this.props;
    console.log("changeProp is ", changeProp);
    return (
      <div className="home-type">
          <label><input type="radio" checked={value === 'all'} onChange={handleChange(changeProp)} value="all" /><span className="graphical-radio"><span className="inside-round"></span></span> All</label>
          <label><input type="radio" checked={value === type[0]} onChange={handleChange(changeProp)} value={type[0]} /><span className="graphical-radio"><span className="inside-round"></span></span> {title[0]}</label> 
          <label ><input type="radio" checked={value === type[1]} onChange={handleChange(changeProp)} value={type[1]} /><span className="graphical-radio"><span className="inside-round"></span></span> {title[1]}</label>
      </div>
    );
  }
}