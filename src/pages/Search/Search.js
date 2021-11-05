import React, {useEffect, useState} from 'react';
import {getApi} from "../../utils/getApi";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../HOC/withErrorApi";
import {getPeopleId,getPeopleImage} from "../../components/services/getPeopleData";
import PropTypes from "prop-types";
import SearchChars from "../../components/Search/SearchChars";

import styles from './Search.module.css';

const Search = ({setErrorApi}) => {
    const [charInSearch,setCharInSearch] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const getResponse = async (param) => {
        const res = await getApi(API_SEARCH+param);

        if(res){
            const charList = res.results.map(({name,url}) => {

                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }
            })

            setCharInSearch(charList);

            setErrorApi(false);

        } else {
            setErrorApi(true);

        }


    }

    useEffect(()=>{
        getResponse('');
    },[])

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        getResponse(value);
    }

    return (
        <div className={styles.container}>
            <h1 className='header__text'>Search</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder='Enter character name'
            />
            <SearchChars charInSearch={charInSearch}/>

        </div>
    );
};

Search.propTypes = {
    setErrorApi: PropTypes.func

}

export default withErrorApi(Search);