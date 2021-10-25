import {API_PEOPLE,API_SECOND,HTTP,API_ROOT,HTTPS,
    GUIDE_IMG_EXTENSION,URL_IMG_PERSON} from "../../constants/api";


const checkProtocol = url => {
    if(url.indexOf(HTTPS) !== -1){
        return HTTPS;
    }
    return HTTP;
}

const getId = (url,category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+API_ROOT+category, '')
        .replace(/\//g,'')

    return id;
}


export const getPeopleId = url => getId(url,API_SECOND);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;

