import styles from './Navigation.module.css';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navigation = ({prevPage,getResource,nextPage,currentPage}) => {

    const handleChangeNext = () => {
        getResource(nextPage);
    }

    const handleChangePrev = () => {
        getResource(prevPage);
    }
    return (
        <div>
            <Link to={`/people/?page=${currentPage-1}`}>
                <button
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    className={styles.button}
                >Previous</button>
            </Link>

            <Link to={`/people/?page=${currentPage+1}`}>
                <button
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    className={styles.button}
                >Next</button>
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