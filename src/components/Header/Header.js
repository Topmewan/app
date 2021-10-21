import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li>
                    <NavLink to='/' exact> Home</NavLink>

                </li>
                <li>
                    <NavLink to='/people' exact>People</NavLink>

                </li>
            </ul>



        </div>




    );

}

export default Header;