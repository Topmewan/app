import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from "prop-types";

import {getApi} from "../../utils/getApi";
import {API_SEARCH} from "../../constants/api";
import {withErrorApi} from "../../HOC/withErrorApi";
import {getPeopleId,getPeopleImage} from "../../components/services/getPeopleData";
import {debounce} from "lodash";

import UiInput from "../../components/UiKit/UiInput/UiInput";
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
	},[]);


	const debounceFunc = useCallback(
		debounce(value => getResponse(value),300),
		[]
	)

	const handleChange = (value) => {
		// const value = e.target.value;
		setInputValue(value);
		debounceFunc(value);
	}

	return (
		<div className={styles.container}>
			<h1 className="header__text">Search</h1>

			<UiInput
				type="text"
				value={inputValue}
				handleChange={handleChange}
				placeholder="Enter character name"
				classes={styles.input__search}
			/>
			<SearchChars charInSearch={charInSearch}/>
		</div>
	);
};

Search.propTypes = {
	setErrorApi: PropTypes.func

}

export default withErrorApi(Search);