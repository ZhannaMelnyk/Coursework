import React from 'react';
import { connect } from 'react-redux';
import { listThunk } from '../../store/thunk/productListThunk'
import ProductsList from './ProductListPresentation'
import { cleanUpListThunk } from '../../store/thunk/cleanUpThunk';
import { filterList } from '../../helpers/filterList';


class ProductListContainer extends React.Component {

  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    this.props.cleanUpList();
  }

  render() {
    console.log();
    if (this.props.error) {
      return <></>
    }

    if (this.props.isLoaded) {
      return <ProductsList products={this.props.productList}
        history={this.props.history} />
    } else {
      return <span className='message'>Loading...</span>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    productList: filterList(state.listReducer.data, state.searchProductsReducer),
    error: state.listReducer.error,
    isLoaded: state.listReducer.isLoaded
  }
}

const mapDispatchToProps = {
  getList: () => listThunk(),
  cleanUpList: () => cleanUpListThunk()
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);