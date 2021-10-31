
import styles from './CharFilms.module.css';
import PropTypes from "prop-types";
import {makeFilmsRequest} from "../../../utils/getApi";
import {c}

const CharFilms = ({charFilms}) => {
    console.log(charFilms)
    return (
        <div>




        </div>
    );
};

CharFilms.propTypes = {
    charFilms:PropTypes.array,

}

export default CharFilms;