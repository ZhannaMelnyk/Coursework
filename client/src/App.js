import React from 'react';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import ListContentContainer from './components/ListContent/ListContentContainer';
import ProductsDetailContainer from './components/ProductDetail/ProductDetailContainer';
import Footer from './components/Footer/Footer';
import rootReducer from './store/reducers/rootReducer';
import './App.css';
import './Common.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Header />
            <ErrorBoundary>
              <Switch>
                <Route exact path={['/', '/products']} render={(props) => <ListContentContainer history={props.history} />} />
                <Route exact path='/products/:id' render={(props) => <ProductsDetailContainer id={props.match.params.id} />} />
              </Switch>
            </ErrorBoundary>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;