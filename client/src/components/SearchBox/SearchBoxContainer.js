import React from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBoxPresentation';
import { searchProductsThunk } from '../../store/thunk/searchProductsThunk';

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props)
    const searchQuery = (new URL(document.location)).searchParams.get('search') || '';
    this.state = {searchQuery: searchQuery};
  }

  componentDidMount() {
    this.props.searchProducts(this.state.searchQuery);
  }

  handleQueryChange() {
    this.props.searchProducts(event.target.value);
    this.props.history.push(`?search=${event.target.value}`);
    this.setState({searchQuery: event.target.value});
  }

  render() {
    return <SearchBox 
      handleQueryChange={this.handleQueryChange.bind(this)} 
      searchQuery={this.state.searchQuery}/>
  }
}

const mapDispatchToProps = {
  searchProducts: (name) => searchProductsThunk(name)
}

export default connect(null, mapDispatchToProps)(SearchBoxContainer);
