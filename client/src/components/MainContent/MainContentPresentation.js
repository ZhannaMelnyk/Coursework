import React from "react";
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
import SortBoxContainer from "../SortBox/SortBoxContainer";
import ProductListContainer from "../ProductListPage/ProductListContainer";
import '../../styles/MainContent.css';

class MainContent extends React.Component {
  render() {
    return <main className='main'>
      <SearchBoxContainer history={this.props.history}/>
      <SortBoxContainer />
      <ProductListContainer />
    </main>
  }
}

export default MainContent;
