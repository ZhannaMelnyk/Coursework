import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/common.css";
import Header from "./components/Header/Header";
import ProductsDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import ProductListContainer from "./components/ProductListPage/ProductListContainer";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route exact path={['/', '/products']} component={ProductListContainer} />
						<Route exact path='/products/:id' render={(routeProps) => <ProductsDetailContainer id={routeProps.match.params.id} />} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;