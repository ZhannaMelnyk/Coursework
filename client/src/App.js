import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers/rootReducer";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from "./components/Header/Header";
import ProductsDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import ProductListContainer from "./components/ProductListPage/ProductListContainer";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";
import "./styles/common.css";

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <ErrorBoundary>
              <Switch>
                <Route exact path={['/', '/products']} render={(props) => <ProductListContainer history={props.history} />} />
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