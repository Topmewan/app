
import {useSelector} from "react-redux";

import styles from './FavoritePage.module.css';


const FavoritePage = () => {
    const storeData = useSelector(state => state.favReducer);
    console.log(storeData);

    return (
        <div>

        </div>
    );
};

export default FavoritePage;