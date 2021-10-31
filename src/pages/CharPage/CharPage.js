import styles from './CharPage.module.css';
import {getApi} from "../../utils/getApi";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {API_CHAR} from "../../constants/api";
import {withErrorApi} from "../../HOC/withErrorApi";
import {getPeopleImage} from "../../components/services/getPeopleData";

import CharInfo from "../../components/CharPage/CharInfo/CharInfo";
import CharPhoto from "../../components/CharPage/CharPhoto/CharPhoto";
import CharLinkBack from "../../components/CharPage/CharLinkBack/CharLinkBack";
import CharFilms from "../../components/CharPage/CharFilms/CharFilms";

const CharPage = ({match, setErrorApi}) => {

    const [charInfo,setCharInfo] = useState(null);
    const [charName,setCharName] = useState(null);
    const[charPhoto,setCharPhoto] = useState(null)
    const[charFilms,setCharFilms] = useState(null)


    useEffect(()=>{
        (async () => {
            const id = match.params.id;
            const res = await getApi(`${API_CHAR}/${id}/`);
            console.log(res)

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
                setCharPhoto(getPeopleImage(id))

                res.films.length &&  setCharFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();

    },[]);

    return (
        <>
            <CharLinkBack/>

            <div className={styles.wraperr}>
                <div className={styles.wrapper}>

                    <span className={styles.person__name}>{charName}</span>

                    <div className={styles.container}>

                        <CharPhoto
                            charPhoto={charPhoto}
                            charName={charName}
                        />

                        { charInfo && <CharInfo charInfo={charInfo}/> }

                        {charFilms && <CharFilms charFilms={charFilms}/>}

                    </div>

                </div>
            </div>


        </>
    );

}

CharPage.propTypes = {
    setErrorApi:PropTypes.func,
    math:PropTypes.object,

}

export default withErrorApi(CharPage);