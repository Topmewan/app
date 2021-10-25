import {useEffect, useState,} from "react";
import {useQueryParams} from "../../components/hooks/useQueryParams";
import PropTypes from 'prop-types';
//HOC
import {withErrorApi} from "../../HOC/withErrorApi";
//Components
import PeopleList from "../../components/PeopleList/PeopleList";

//Utils
import {getApi} from "../../utils/getApi";

import {getPeopleId,getPeopleImage} from "../../components/services/getPeopleData";

//Constants
import {API_PEOPLE} from '../../constants/api';
//Styles
import styles from './PeoplePage.module.css';



const PeoplePage = ({setErrorApi}) => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState([]);

    const query = useQueryParams();
    const queryPage = query.get('page');
    console.log(queryPage)


    const getResourse = async (url) => {

        const result = await getApi(url);
        console.log(result);


        if(result){
            const peopleList = result.results.map(({name,url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                return {
                    id,
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

