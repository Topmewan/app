import PropTypes from "prop-types";
import React,{useEffect, useState,Suspense} from "react";

import {withErrorApi} from "../../HOC/withErrorApi";

import CharInfo from "../../components/CharPage/CharInfo/CharInfo";
import CharPhoto from "../../components/CharPage/CharPhoto/CharPhoto";
import CharLinkBack from "../../components/CharPage/CharLinkBack/CharLinkBack";
import UiLoading from "../../components/UiKit/UiLoading/UiLoading";
// import CharFilms from "../../components/CharPage/CharFilms/CharFilms";

import {getApi} from "../../utils/getApi";
import {API_CHAR} from "../../constants/api";
import {getPeopleImage} from "../../components/services/getPeopleData";

import styles from './CharPage.module.css';

const CharFilms = React.lazy(() => import("../../components/CharPage/CharFilms/CharFilms"))
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

                        {charFilms && (
                            <Suspense fallback={<UiLoading/>}>
                                <CharFilms charFilms={charFilms}/>
                            </Suspense>
                        )}

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