import {ADD_CHAR_TO_FAVORITE,REMOVE_CHAR_FROM_FAVORITE} from "../constans/actionTypes";


export const addCharToFavorite = (char) => ({
    type: 'ADD_CHAR_TO_FAVORITE',
    payload:char
});



export const removeCharFromFavorite = (charId) => ({
    type: 'REMOVE_CHAR_FROM_FAVORITE',
    payload:charId
});