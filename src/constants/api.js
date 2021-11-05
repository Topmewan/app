
//protocol
export const HTTPS = 'https://';
export const HTTP = 'http://';

//api
export const API_ROOT = 'swapi.dev/api/';
export const API_SECOND = 'people';
export const API_PAGE = '/?page=';
export const API_SEARCH_PARAM = '/?search=';


export const API_PEOPLE = HTTPS + API_ROOT + API_SECOND + API_PAGE;
export const API_CHAR = HTTPS + API_ROOT + API_SECOND;
export const API_SEARCH = HTTPS + API_ROOT + API_SECOND+API_SEARCH_PARAM;



//images
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE ;

