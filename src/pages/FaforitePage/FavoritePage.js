
import {useSelector} from "react-redux";

import styles from './FavoritePage.module.css';


const FavoritePage = () => {
    const storeData = useSelector(state => state.favReducer);

    return (
        <div>

        </div>
    );
};

export default FavoritePage;