import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../../styles/ProductList.css";
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";

class ProductsList extends React.Component {
  render() {
    return <main>
      <SearchBoxContainer history={this.props.history}/>
      <div className='products-list'>
        {
          this.props.products.length !== 0
          ?
          this.props.products.map(product => {
            return <ProductCard data={product} />
          })
          :
          <span className='message'>No results</span>         
        }
      </div>
    </main>
  }
}

export default ProductsList;