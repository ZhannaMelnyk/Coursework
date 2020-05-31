import React from "react";
import '../../styles/ProductDetail.css'

class ProductDetail extends React.Component {
	render() {
		return <main className='product'>
			<img className='product__image' src={this.props.product.image} />
			<h2 className='product__title'>{this.props.product.name}</h2>
			<p className='product__description'>{this.props.product.description}</p>
			<ul className='product__ingredient-list'>
				{
					this.props.product.ingredients.map(ingredient => {
						return <li className='product__ingredient-item'>{ingredient}</li>
					})
				}
			</ul>
			<span className='product__price'>{this.props.product.price}</span>
			{/* <input className='product__btn' type='submit'>Buy</input>  */}
		</main>
	}
}

export default ProductDetail;