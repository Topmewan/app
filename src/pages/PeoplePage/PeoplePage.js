import {useEffect, useState,} from "react";
import {useQueryParams} from "../../components/hooks/useQueryParams";
import PropTypes from 'prop-types';
//HOC
import {withErrorApi} from "../../HOC/withErrorApi";
//Components
import PeopleList from "../../components/PeopleList/PeopleList";
import Navigation from "../../components/Navigation/Navigation";

//Utils
import {getApi} from "../../utils/getApi";

import {getPeopleId,getPeopleImage,getPeoplePageId} from "../../components/services/getPeopleData";

//Constants
import {API_PEOPLE} from '../../constants/api';
//Styles
import styles from './PeoplePage.module.css';



const PeoplePage = ({setErrorApi}) => {
    // const [loading,setLoading] = useState(true);
    const [character,setCharacter] = useState(null);
    const [prevPage,setPrevPage] = useState(null);
    const [nextPage,setNextPage] = useState(null);
    const [currentPage,setCurrentPage] = useState(1);


    const query = useQueryParams();
    const queryPage = query.get('page');

    // console.log(queryPage,prevPage,nextPage);



    const getResourse = async (url) => {

        const result = await getApi(url);


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
            setCharacter(peopleList);
            setPrevPage(result.previous);
            setNextPage(result.next);
            setCurrentPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);

        }

    }

    useEffect(()=> {
        getResourse(API_PEOPLE + queryPage);
    },[]);

    return (
        <>
            <Navigation
                getResource={getResourse}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
            />
            {character && <PeopleList character={character}/>}
        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);

