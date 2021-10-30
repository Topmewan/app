import styles from './CharLinkBack.module.css';
import {useHistory} from "react-router";
import icon from './img/iconmonstr-angel-left-circle-thin.svg';

const CharLinkBack = () => {
    const history=useHistory();

    const handleGoBack = e => {
        e.preventDefault();
        history.goBack();

    }
    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={icon} alt="Go Back"/>

            <span>Go Back</span>
        </a>
    );
};

export default CharLinkBack;