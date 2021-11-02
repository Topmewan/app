import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


import {Link} from "react-router-dom";

import bookmark from './img/bookmark.svg';


import styles from './Favorite.module.css';


const Favorite = () => {
    const [count,setCount] = useState(0);

    const storeData = useSelector(state => state.favReducer);

    useEffect(()=>{
        const length = Object.keys(storeData).length;
        setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={bookmark} alt="Favorites"/>
            </Link>
        </div>
    );
};

export default Favorite;