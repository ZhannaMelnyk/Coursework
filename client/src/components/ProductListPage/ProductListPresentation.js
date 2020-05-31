import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../../styles/ProductList.css";

class ProductsList extends React.Component {
	render() {
		return <main className='products-list'>
			{
				this.props.products.map(product => {
					return <ProductCard data={product} />
				})
			}
		</main>
	}
}

export default ProductsList;