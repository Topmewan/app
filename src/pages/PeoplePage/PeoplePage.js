import {useEffect, useState,} from "react";
import PropTypes from 'prop-types';
//HOC
import {withErrorApi} from "../../HOC/withErrorApi";
//Components
import PeopleList from "../../components/PeopleList/PeopleList";

//Utils
import {getApi} from "../../utils/getApi";
//Constants
import {API_PEOPLE} from '../../constants/api';
//Styles
import styles from './PeoplePage.module.css';



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

