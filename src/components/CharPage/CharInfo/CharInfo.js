import styles from './CharInfo.module.css';
import PropTypes from "prop-types";

const CharInfo = ({charInfo}) => {
    return (
        <div>
            <ul>
                {charInfo.map(({title,data})=> (
                    data && (
                        <li key={title}>
                            <span>{title}:{data}</span>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

CharInfo.propTypes = {
    charInfo:PropTypes.array
}

export default CharInfo;
