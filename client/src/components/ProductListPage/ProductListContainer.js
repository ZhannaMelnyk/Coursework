import React from 'react';
import ProductsList from './ProductListPresentation'

export default class ProductListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: null
		}
	}

	componentDidMount() {
		fetch('http://localhost:3030/api/products')
			.then(response => response.json())
			.then(products => this.setState({ products: products }))
			.catch(error => { throw new Error('something wrong') })
	}

	render() {
		if (this.state.products) {
			return <ProductsList products={this.state.products} />
		} else {
			return <span>Loading</span>
		}
	}
}