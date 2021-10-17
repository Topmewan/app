import styles from './PeoplePage.module.css';
import {getApi} from "../../utils/getApi";
import {useEffect, useState,} from "react";
import {API_PEOPLE} from '../../constants/api';
import PeopleList from "../../components/PeopleList/PeopleList";

const PeoplePage = () => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState([]);

    const getResourse = async (url) => {

        const result = await getApi(url);
        console.log(result);

        const peopleList = result.map(({name,img,char_id}) => {
            return {
                char_id,
                name,
                img
            }
        })
        console.log(peopleList);
        setCharacter(peopleList);
        // setLoading(false);

    }

    useEffect(()=> {
        getResourse(API_PEOPLE);

    },[]);

    return (
        <>
            {character && <PeopleList character={character}/>}
        </>
    );
}

export default PeoplePage;