import styles from './CharPage.module.css';
import {getApi} from "../../utils/getApi";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {API_CHAR} from "../../constants/api";
import {withErrorApi} from "../../HOC/withErrorApi";

const CharPage = ({match, setErrorApi}) => {

    useEffect(()=>{
        (async () => {
            const id = match.params.id;
            const res = await getApi(`${API_CHAR}/${id}/`);

            if(res){
                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();

    },[]);

    return (
        <div>

        </div>
    );

}

CharPage.propTypes = {
    setErrorApi:PropTypes.func,
    math:PropTypes.object,

}

export default withErrorApi(CharPage);