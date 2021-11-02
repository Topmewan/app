import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import PeopleList from "../../components/PeopleList/PeopleList";
import styles from './FavoritePage.module.css';


const FavoritePage = () => {
    const [character,setCharacter] = useState([]);

    const storeData = useSelector(state => state.favReducer);
    console.log(storeData);

    const dispatch = useDispatch();

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
            <PeopleList character={character}/>

        </div>
    );
};

export default FavoritePage;