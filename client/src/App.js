import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/common.css";
import Product from "./components/ProductDetail/ProductDetailContainery";
import Header from "./components/Header/Header";
import ProductsListContainer from "./components/ProductsPage/productsListContainery";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path={['/', '/products']} component={ProductsListContainer} />
						<Route exact path='/products/:id' render={(routeProps) => <Product id={routeProps.match.params.id} />} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;