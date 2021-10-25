import styles from './Navigation.module.css';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navigation = ({prevPage,getResource,nextPage,currentPage}) => {
    return (
        <div>
            <Link to={`/people/?page=${currentPage-1}`}>
                <button className={styles.button}>Previous</button>
            </Link>

            <Link to={`/people/?page=${currentPage+1}`}>
                <button className={styles.button}>Previous</button>
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