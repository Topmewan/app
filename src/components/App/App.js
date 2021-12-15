//Componetns
import styles from './App.module.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import routesConfig from "../routes/routesConfig";
import Header from "../Header/Header";



function App() {

	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header/>
					<Switch>
						{routesConfig.map ((route) => (
							<Route
								key={route.id}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						)
						)}
					</Switch>
				</div>
			</BrowserRouter>
		</>

	);
}

export default App;
