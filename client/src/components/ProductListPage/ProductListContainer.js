import React from 'react';
import { connect } from 'react-redux';
import { listThunk } from '../../store/thunk/productListThunk'
import ProductsList from './ProductListPresentation'

class ProductListContainer extends React.Component {

	componentDidMount() {
		this.props.getList();
	}

	render() {
		if (this.props.error) {
			return <></>
		}

		if (this.props.isLoaded) {
			return <ProductsList products={this.props.list} />
		} else {
			return <span>Loading</span>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.listReducer.list,
		error: state.listReducer.error,
		isLoaded: state.listReducer.isLoaded
	}
}

const mapDispatchToProps = {
	getList: () => listThunk()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);