import React from "react";
import '../../styles/SortBox.css'

class SortBox extends React.Component {
  render() {
    console.log(this.props);
    return <div className='sort-box'>
      <span className='sort-box__text'>Sort by:</span>
      <button onClick={this.props.handleClick.bind(this, 'price', 'asc')}>low to high price</button>
      <button onClick={this.props.handleClick.bind(this, 'price', 'desc')}>high to low price</button>
      <button onClick={this.props.handleClick.bind(this, 'name', 'asc')}>A to Z</button>
      <button onClick={this.props.handleClick.bind(this, 'name', 'desc')}>Z to A</button>
    </div>
  }
}

export default SortBox;