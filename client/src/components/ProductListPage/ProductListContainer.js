import React from 'react';
import { connect } from 'react-redux';
import { listThunk } from '../../store/thunk/productListThunk'
import ProductsList from './ProductListPresentation'
import { cleanUp } from '../../store/actions/cleanUpAction';

class ProductListContainer extends React.Component {

	componentDidMount() {
		this.props.getList();
	}

	componentWillUnmount() {
		this.props.cleanUp();
	}

	render() {
		if (this.props.error) {
			return <></>
		}

		if (this.props.isLoaded) {
			return <ProductsList products={this.props.productList} />
		} else {
			return <span>Loading</span>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		productList: state.listReducer.data,
		error: state.listReducer.error,
		isLoaded: state.listReducer.isLoaded
	}
}

const mapDispatchToProps = {
	getList: () => listThunk(),
	cleanUp: () => cleanUp()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);