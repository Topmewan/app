import {useDispatch} from "react-redux";
import PropTypes from "prop-types";

import CharInfo from "../CharInfo/CharInfo";
import iconFavAdd from './img/fav-add.svg';
import iconFavRemove from './img/fav-remove.svg';

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

    const handleDispatchFavorites = () => {
        if(charFavorite){
            dispatch(removeCharFromFavorite(charId));
            setCharFavorite(false);
        } else {
            dispatch(addCharToFavorite({
                [charId]: {
                    name:charName,
                    img:charPhoto
                }
            }));
            setCharFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={charPhoto} alt={charName}/>
                <img
                    onClick={handleDispatchFavorites}
                    src={charFavorite ? iconFavRemove : iconFavAdd}
                    alt=""
                    className={styles.favorite}
                />
            </div>



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