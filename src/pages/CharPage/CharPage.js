import styles from './CharPage.module.css';
import {getApi} from "../../utils/getApi";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {API_CHAR} from "../../constants/api";
import {withErrorApi} from "../../HOC/withErrorApi";

const CharPage = ({match, setErrorApi}) => {

    const [charInfo,setCharInfo] = useState(null);
    const [charName,setCharName] = useState(null);


    useEffect(()=>{
        (async () => {
            const id = match.params.id;
            const res = await getApi(`${API_CHAR}/${id}/`);

            if(res){
                setCharInfo([
                    {title:'Height',data: res.height},
                    {title:'Mass',data: res.mass},
                    {title:'Hair Color',data: res.hair_color},
                    {title:'Skin Color',data: res.skin_color},
                    {title:'Eye Color',data: res.eye_color},
                    {title:'Birth Year',data: res.birth_year},
                    {title:'Gender',data: res.gender},
                ]);
                setCharName(res.name);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();

    },[]);

    return (
        <>
            <h1>{charName}</h1>
            {charInfo && (
                <ul>
                    {charInfo.map(({title,data})=> (
                        data && <li key={title}>
                            <span>{title}:{data}</span>
                        </li>
                        ))}
                </ul>
            )}


        </>
    );

}

CharPage.propTypes = {
    setErrorApi:PropTypes.func,
    math:PropTypes.object,

}

export default withErrorApi(CharPage);