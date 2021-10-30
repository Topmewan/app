import styles from './CharPhoto.module.css';
import PropTypes from "prop-types";
import CharInfo from "../CharInfo/CharInfo";


const CharPhoto = ({charPhoto,charName}) => {
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={charPhoto} alt={charName}/>
        </div>
    );
};

CharInfo.propTypes = {
    charName:PropTypes.string,
    charPhoto:PropTypes.string,
}

export default CharPhoto;