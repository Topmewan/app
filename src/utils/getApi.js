import {HTTPS,HTTP} from "../constants/api";

export const changeHTTP = (url) => {
    const result = url ? url.replace(HTTP,HTTPS) : url;
    return result;
};

export const getApi = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok){
            console.error('Could not fetch',res.status);
            return false;
        }
        return await res.json();
    } catch (e) {
        console.error(e.message);
        return false;
    }
};

// (async () => {
//     const body = await getApi(API_ROOT + API_SECOND);
//     console.log(body);
// })();

export const makeFilmsRequest = async (url) =>{
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
};