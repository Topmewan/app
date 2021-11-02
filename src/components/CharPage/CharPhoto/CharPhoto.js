import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

import CharInfo from "../CharInfo/CharInfo";

import {addCharToFavorite,removeCharFromFavorite} from "../../store/actions";

import styles from './CharPhoto.module.css';

const CharPhoto = ({
   charPhoto,
   charName,
   charId,
    charFavorite,
    setCharFavorite

}) => {
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addCharToFavorite({
            [charId]: {
                name:charName,
                img:charPhoto
            }
        }));
        setCharFavorite(true);

    }

    const remove = () => {
        dispatch(removeCharFromFavorite(charId));
        setCharFavorite(false);
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={charPhoto} alt={charName}/>
            </div>

            {charFavorite
                ? <button onClick={remove}>Remove</button>
                : <button onClick={add}>Add</button>
            }

        </>

    );
};

CharInfo.propTypes = {
    charName:PropTypes.string,
    charPhoto:PropTypes.string,
    charId:PropTypes.string,
    charFavorite:PropTypes.bool,
    setCharFavorite:PropTypes.func
}

export default CharPhoto;