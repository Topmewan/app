import styles from './Navigation.module.css';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UiButton from "../UiKit/UiButton/UiButton";

const Navigation = ({prevPage,getResource,nextPage,currentPage}) => {

    const handleChangeNext = () => {
        getResource(nextPage);
    }

    const handleChangePrev = () => {
        getResource(prevPage);
    }
    return (
        <div>
            <Link to={`/people/?page=${currentPage-1}`} className={styles.link}>
                <UiButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}

                />
            </Link>

            <Link to={`/people/?page=${currentPage+1}`} className={styles.link}>
                <UiButton
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    text='Next'
                />

            </Link>
        </div>
    );


}

Navigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nexPage: PropTypes.string,
    currentPage: PropTypes.number,

}

export default Navigation;