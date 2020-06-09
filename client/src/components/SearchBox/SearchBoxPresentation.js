import React from 'react';
import '../../styles/SearchBox.css';

class SearchBox extends React.Component {
  render() {
    return <div className='search'>
      <input
        className='search-input'
        type='text'
        placeholder='Search...'
        value={this.props.searchQuery}
        onChange={this.props.handleQueryChange.bind(this)} />
    </div>
  }
}

export default SearchBox;