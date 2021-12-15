import {ADD_CHAR_TO_FAVORITE,REMOVE_CHAR_FROM_FAVORITE} from "../constans/actionTypes";
import {omit} from 'lodash';
import {getLocalStorage} from '../../../utils/localStorage';

const initialState = getLocalStorage('store');

const favReducer = (state=initialState,action) => {
	switch (action.type) {
	case ADD_CHAR_TO_FAVORITE:
		return {
			...state,
			...action.payload
		}
	case REMOVE_CHAR_FROM_FAVORITE:
		return omit(state, [action.payload])
	default:
		return state;
	}
}

export default favReducer;

