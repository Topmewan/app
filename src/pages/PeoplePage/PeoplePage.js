import {useEffect, useState,} from "react";
import PropTypes from 'prop-types';
//HOC
import {withErrorApi} from "../../components/HOC/withErrorApi";
//Components
import PeopleList from "../../components/PeopleList/PeopleList";
//Hooks
import {getApi} from "../../utils/getApi";
//Utils
import {getApi} from "../../utils/getApi";
//Styles
import styles from './PeoplePage.module.css';





import {API_PEOPLE} from '../../constants/api';



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

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);

