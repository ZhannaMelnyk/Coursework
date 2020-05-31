import React from 'react';
import ProductDetail from './ProductDetailPresentational'

export default class ProductsDetailContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: null
		}
	}

	componentDidMount() {
		fetch(`http://localhost:3030/api/products/${this.props.id}`)
			.then(response => response.json())
			.then(product => this.setState({product: product}))
			.catch(error => { throw new Error('something wrong') })
	}

	render() {
		if (this.state.product) {
			return <ProductDetail product={this.state.product}/>
		} else {
			return <span>Loading</span>
		}
	}
}