import PropTypes from "prop-types";
import UiButton from "../UiButton/UiButton";
import cn from 'classnames';
import clearIcon from './img/clear.svg';

import styles from './UiInput.module.css';



const UiInput = ({text,handleChange,placeholder,value,classes}) => {

    return (
        <div className={cn(styles.wrapper__input,classes)}>
            <input
                type={text}
                onChange={(e)=>handleChange(e.target.value) }
                placeholder={placeholder}
                value={value}
                className={styles.input}
            />
            <img
                onClick={() => value && handleChange('') }
                src={clearIcon}
                alt="Clear"
                className={cn(styles.clear, !value && styles.clear__disabled)}
            />
        </div>
    );
};

UiButton.propTypes = {
    type:PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes:PropTypes.string,
}

export default UiInput;