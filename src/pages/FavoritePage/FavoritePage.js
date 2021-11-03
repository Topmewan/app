import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import PeopleList from "../../components/PeopleList/PeopleList";
import styles from './FavoritePage.module.css';
import NotFound from "../NotFound/NotFound";


const FavoritePage = () => {
    const [character,setCharacter] = useState([]);

    const storeData = useSelector(state => state.favReducer);
    console.log(storeData);

    useEffect(()=>{
        const arr = Object.entries(storeData);

        if(arr.length){
            const res = arr.map(item => {
                return {
                    id:item[0],
                    ...item[1]
                }
            })
            setCharacter(res);
        }
    },[]);

    return (
        <div>
            <h1 className='header__text'>Favorite Characters</h1>
            {character.length
                ? <PeopleList character={character}/>
                : <h2 className={styles.comment}>No data, please add character.</h2>
            }

        </div>
    );
};

export default FavoritePage;