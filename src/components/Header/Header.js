
import {NavLink} from "react-router-dom";
import {useTheme,THEME_LIGHT,THEME_NEUTRAL,THEME_DARK} from "../../context/ThemeProvider";

import Favorite from "../Favorite/Favorite";

import lightIcon from './img/light.png';
import darkIcon from './img/dark.png';
import neutralIcon from './img/neutral.png';

import styles from './Header.module.css';
import {useEffect, useState} from "react";


const Header = () => {
    const [icon,setIcon] = useState(neutralIcon);

    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(lightIcon);
                break;
            case THEME_DARK:
                setIcon(darkIcon);
                break;
            case THEME_NEUTRAL:
                setIcon(neutralIcon);
                break;
            default:
                return setIcon(neutralIcon);
        }

    },[isTheme]);

    return (
        <div className={styles.container}>
            <img src={icon} alt="logo" className={styles.logo}/>
            <ul className={styles.list__container}>

                <li><NavLink to='/' exact> Home</NavLink></li>

                <li><NavLink to='/people/?page=1'>People</NavLink></li>

                <li><NavLink to='/search'>Search</NavLink></li>

                <li> <NavLink to='/not-found' exact>Not Found</NavLink></li>

            </ul>
            <Favorite/>

        </div>




    );

}

export default Header;