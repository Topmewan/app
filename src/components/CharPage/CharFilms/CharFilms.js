import {useEffect, useState} from "react";
import PropTypes from "prop-types";


import {makeFilmsRequest,changeHTTP} from "../../../utils/getApi";


import styles from './CharFilms.module.css';


const CharFilms = ({charFilms}) => {
    const [filmsName,setFilmsName] = useState([]);

    useEffect(()=> {
        (async () => {
            const films = charFilms.map(url => changeHTTP(url));
            const response = await makeFilmsRequest(films);

            setFilmsName(response);
        })();

    },[]);

    return (
        <div className={styles.wrapper}>

            <ul className={styles.list__container}>
                {filmsName
                    .sort((a,b) => {
                        return a.episode_id - b.episode_id;
                    })
                    .map(({title, episode_id}) =>
                    <li className={styles.list__item} key={episode_id}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colon}>: </span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                    )}
            </ul>
        </div>
    );
};

CharFilms.propTypes = {
    charFilms:PropTypes.array,

}

export default CharFilms;