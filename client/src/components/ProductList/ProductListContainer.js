import React from 'react';
import { connect } from 'react-redux';
import { listThunk } from '../../store/thunk/productListThunk'
import { cleanUpListThunk } from '../../store/thunk/cleanUpThunk';
import { filterList } from '../../helpers/filterList';
import ProductsList from './ProductListPresentation'

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  componentWillUnmount() {
    this.props.cleanUpList();
  }

  render() {
    if (this.props.error) {
      throw new Error(this.props.error);
    }

    if (this.props.isLoaded) {
      if (this.props.productList.length !== 0) {
        return <ProductsList products={this.props.productList}
          history={this.props.history} />
      } else {
        return <span className='message'>No results</span>
      }
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