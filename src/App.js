//Componetns
import PeoplePage from './pages/PeoplePage/PeoplePage';
import HomePage from "./pages/HomePage/HomePage";
import cn from 'classnames';
import styles from './App.module.css';
import {getApi} from "./utils/getApi";
import {BrowserRouter, NavLink, Route,Switch} from "react-router-dom";
import routesConfig from "./components/routes/routesConfig";
import Header from "./components/Header/Header";

// console.log(styles);
// getApi();


function App() {


  return (
    <div className={cn(styles.header)}>
        <BrowserRouter>

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

        </BrowserRouter>

    </div>
  );
}

export default App;
