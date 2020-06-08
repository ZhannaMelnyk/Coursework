import React from 'react';
import { connect } from 'react-redux';
import SortBox from './SortBoxPresentation';
import { sortList } from '../../helpers/sortList';
import { changeListThunk } from '../../store/thunk/changeListThunk';


class SortBoxContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      field: 'name',
      order: ''
    };
  }

  handleClick(field, order) {
    let newList = sortList(this.props.productList, field, order);
    console.log(this.props.productList)
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