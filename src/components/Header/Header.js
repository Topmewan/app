import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>

                <li><NavLink to='/' exact> Home</NavLink></li>

                <li><NavLink to='/people/?page=1'>People</NavLink></li>

                <li> <NavLink to='/not-found' exact>Not Found</NavLink></li>

                <li><NavLink to='/favorites' exact>Fav</NavLink></li>
            </ul>



        </div>




    );

}

export default Header;