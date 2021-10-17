import styles from './PeoplePage.module.css';
import {getApi} from "../../utils/getApi";
import {useEffect, useState,} from "react";
import {API_PEOPLE} from '../../constants/api';

const PeoplePage = () => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState([]);

    const getResourse = async (url) => {


        const result = await getApi(url);
        console.log(result);

        const peopleList = result.map(({name,nickname}) => {
            return {
                name,
                nickname
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
            { character &&
                <ul>
                    {character.map(({name}) => <li key={name}>{name}</li>)}
                </ul>

            }



        </>
    );
}

export default PeoplePage;