import React from 'react';
import ListContent from './ListContentPresentation';

class ListContentContainer extends React.Component {
  render() {
    return <ListContent history={this.props.history} />
  }
}

export default ListContentContainer;