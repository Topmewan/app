import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from "./context/ThemeProvider";

import {Provider} from "react-redux";
import store from "./components/store/store";

import App from './components/App/App';
import './styles/index.css';


ReactDOM.render(

	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

