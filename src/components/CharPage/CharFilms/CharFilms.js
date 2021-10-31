
import styles from './CharFilms.module.css';
import PropTypes from "prop-types";
import {makeFilmsRequest,changeHTTP} from "../../../utils/getApi";
import {useEffect, useState} from "react";

const CharFilms = ({charFilms}) => {
    const [filmsName,setFilmsName] = useState([]);

    useEffect(()=> {
        (async () => {
            const films = charFilms.map(url => changeHTTP(url));
            const response = await makeFilmsRequest(films);

            console.log(response)
            setFilmsName(response);
        })();

    },[]);

    return (
        <div>

            <ul>
                {filmsName
                    .sort((a,b) => {
                        return a.episode_id - b.episode_id;
                    })
                    .map(({title, episode_id}) =>
                    <li key={episode_id}>
                        <span>Episode {episode_id}</span>
                        <span>: </span>
                        <span>{title}</span>
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