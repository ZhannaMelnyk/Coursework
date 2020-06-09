import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import '../../styles/ProductList.css';

class ProductsList extends React.Component {
  render() {
    return <div className='products-list'>
      {
        this.props.products.map(product => {
          return <ProductCard data={product} />
        })
      }
    </div>
  }
}

export default ProductsList;