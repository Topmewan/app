import styles from './CharPhoto.module.css';
import PropTypes from "prop-types";
import CharInfo from "../CharInfo/CharInfo";


const CharPhoto = ({charPhoto,charName}) => {
    return (
        <div>
            <img src={charPhoto} alt={charName}/>
        </div>
    );
};

CharInfo.propTypes = {
    charName:PropTypes.string,
    charPhoto:PropTypes.string,
}

export default CharPhoto;