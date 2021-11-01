import {ADD_CHAR_TO_FAVORITE,REMOVE_CHAR_FROM_FAVORITE} from "../constans/actionTypes";


const favReducer = (state,action) => {
    switch (action.type) {
        case ADD_CHAR_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_CHAR_FROM_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;


    }
}

export default favReducerж

