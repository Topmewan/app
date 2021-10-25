//Componetns
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
