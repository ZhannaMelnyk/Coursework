import React from 'react';
import MainContent from './MainContentPresentation';

class MainContentContainer extends React.Component {
  render() {
    return <MainContent history={this.props.history}/>
  }
} 

export default MainContentContainer;