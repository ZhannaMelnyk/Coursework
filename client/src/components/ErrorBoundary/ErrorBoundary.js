import React from 'react';
import '../../styles/ErrorBoundary.css';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log(`error: ${error}`);
  }

  render() {
    if (this.state.hasError) {
      return <div className='error-boundary'>
        <h2 className='error-boundary__title'>Something went wrong</h2>
      </div>
    } else {
      return this.props.children;
    }
  }
}