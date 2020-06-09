import React from 'react';
import { connect } from 'react-redux';
import { changeListThunk } from '../../store/thunk/changeListThunk';
import { sortList } from '../../helpers/sortList';
import SortBox from './SortBoxPresentation';


class SortBoxContainer extends React.Component {
  handleClick(field, order) {
    let newList = sortList(this.props.productList, field, order);
    this.props.changeList(newList);
  }

  render() {
    return <SortBox
      handleClick={this.handleClick.bind(this)} />
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.listReducer.data
  }
}

const mapDispatchToProps = {
  changeList: (list) => changeListThunk(list)
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBoxContainer);