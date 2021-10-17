import styles from './PeoplePage.module.css';
import {getApi} from "../../utils/getApi";
import {useEffect, useState,} from "react";
import {API_PEOPLE} from '../../constants/api';
import PeopleList from "../../components/PeopleList/PeopleList";

const PeoplePage = () => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState([]);
    const [errorApi,setErrorApi] = useState(false);


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
            {errorApi ? <h1>Error</h1> :
                <div>
                    {character && <PeopleList character={character}/>}
                </div>

            }


        </>
    );
}

export default PeoplePage;