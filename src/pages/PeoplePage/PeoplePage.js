import styles from './PeoplePage.module.css';
import {getApi} from "../../utils/getApi";
import {useEffect, useState,} from "react";
import {API_PEOPLE} from '../../constants/api';
//Components
import PeopleList from "../../components/PeopleList/PeopleList";
//HOC
import {withErrorApi} from "../../components/HOC/withErrorApi";

const PeoplePage = ({setErrorApi}) => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState([]);


    const getResourse = async (url) => {

        const result = await getApi(url);

        if(result){
            const peopleList = result.map(({name,img,char_id}) => {
                return {
                    char_id,
                    name,
                    img
                }
            })
            console.log(peopleList);
            setCharacter(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);

        }

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

export default withErrorApi(PeoplePage);