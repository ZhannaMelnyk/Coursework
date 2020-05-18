import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
	<App />,
	document.getElementById("root")
);

console.log('API url:', process.env.REACT_APP_API_URL);