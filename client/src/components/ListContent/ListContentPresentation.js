import React from 'react';
import SearchBoxContainer from '../SearchBox/SearchBoxContainer';
import SortBoxContainer from '../SortBox/SortBoxContainer';
import ProductListContainer from '../ProductList/ProductListContainer';
import './ListContent.css';

class ListContent extends React.Component {
  render() {
    return <main className='main'>
      <SearchBoxContainer history={this.props.history} />
      <SortBoxContainer />
      <ProductListContainer />
    </main>
  }
}

export default ListContent;
