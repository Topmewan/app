//Componetns
import PeoplePage from './pages/PeoplePage/PeoplePage';
import HomePage from "./pages/HomePage/HomePage";
import cn from 'classnames';
import styles from './App.module.css';
import {getApi} from "./utils/getApi";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

// console.log(styles);
// getApi();


function App() {


  return (
    <div className={cn(styles.header)}>
        <BrowserRouter>
        <NavLink to='/' exact>
            Home
        </NavLink>

        <NavLink to='/people' exact>
            People
        </NavLink>

        <Route path='/' exact component={HomePage}/>
        <Route path='/people' exact component={PeoplePage} />
        </BrowserRouter>

    </div>
  );
}

export default App;
