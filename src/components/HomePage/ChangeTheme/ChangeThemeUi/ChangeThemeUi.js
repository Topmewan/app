import styles from './ChangeThemeUi.module.css';
import PropTypes from "prop-types";
import cn from 'classnames';
import {useTheme} from "../../../../context/ThemeProvider";

const ChangeThemeUi = ({
    text,
    img,
    theme,
    classes
}) => {

    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item,classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text}/>


        </div>
    );
};
ChangeThemeUi.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
    theme:PropTypes.string
}


export default ChangeThemeUi;