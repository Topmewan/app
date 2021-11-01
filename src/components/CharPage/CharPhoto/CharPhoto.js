import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

import CharInfo from "../CharInfo/CharInfo";

import {addCharToFavorite,removeCharFromFavorite} from "../../store/actions";

import styles from './CharPhoto.module.css';

const CharPhoto = ({
   charPhoto,
   charName,
   charId
}) => {
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addCharToFavorite({
            [charId]: {
                name:charName,
                img:charPhoto
            }
        }));
    }

    const remove = () => {
        dispatch(removeCharFromFavorite());
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={charPhoto} alt={charName}/>
            </div>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </>

    );
};

CharInfo.propTypes = {
    charName:PropTypes.string,
    charPhoto:PropTypes.string,
    charId:PropTypes.string
}

export default CharPhoto;