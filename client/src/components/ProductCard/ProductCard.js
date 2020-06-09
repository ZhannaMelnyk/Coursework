import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/ProductCard.css'

export default class ProductCard extends React.Component {
    render() {
        return <div className='product-list__card'>
            <img className='card__img' src={this.props.data.image} alt={this.props.data.name} />
            <div className='card__info'>
                <h3 className='card__title'>{this.props.data.name}</h3>
                <span className='card__price'>{this.props.data.price} UAH</span>
                <Link to={'/products/' + this.props.data.id} className='card__btn'>Read more...</Link>
            </div>

        </div>
    }
}