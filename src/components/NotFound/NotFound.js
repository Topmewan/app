import styles from './NotFound.module.css';
import {useLocation} from "react-router";


const NotFound = () => {

    let location = useLocation();


    return(
        <>
            <h1 className={styles.heading}>404</h1>
            <p className={styles.text}> Not match for <u>{location.pathname}</u></p>


        </>



    );

}

export default NotFound;
