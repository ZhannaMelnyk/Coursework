import React from 'react';
import { connect } from 'react-redux';
import { detailsThunk } from '../../store/thunk/productDetailThunk';
import ProductDetail from './ProductDetailPresentation';
import { cleanUp } from '../../store/actions/cleanUpAction';

class ProductsDetailContainer extends React.Component {

	componentDidMount() {
		this.props.getDetails(this.props.id);
	}
	
	componentWillUnmount() {
		this.props.cleanUp();
	}

	render() {
		if (this.props.error) {
			return <></>
		}
		
		if (this.props.isLoaded) {
			return <ProductDetail product={this.props.productDetails} />
		} else {
			return <span>Loading</span>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		productDetails: state.detailsReducer.data,
		error: state.detailsReducer.error,
		isLoaded: state.detailsReducer.isLoaded
	}
}

const mapDispatchToProps = {
	getDetails: (id) => detailsThunk(id),
	cleanUp: () => cleanUp()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetailContainer);