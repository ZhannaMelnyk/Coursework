import React from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetailPresentation';
import { detailsThunk } from '../../store/thunk/productDetailThunk';
import { cleanUpDetailThunk } from '../../store/thunk/cleanUpThunk';

class ProductsDetailContainer extends React.Component {
  componentDidMount() {
    this.props.getDetails(this.props.id);
  }

  componentWillUnmount() {
    this.props.cleanUpDetail();
  }

  render() {
    if (this.props.error) {
      throw new Error(this.props.error);
    }

    if (this.props.isLoaded) {
      return <ProductDetail product={this.props.productDetails} />
    } else {
      return <span>Loading...</span>
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
  cleanUpDetail: () => cleanUpDetailThunk()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetailContainer);