import {
	API_SECOND, HTTP, API_ROOT, HTTPS,
	GUIDE_IMG_EXTENSION, URL_IMG_PERSON, API_PAGE,
} from '../../constants/api'

export const getPeoplePageId = url => {
	const position = url.lastIndexOf(API_PAGE)
	const id = url.slice(position + API_PAGE.length, url.length)

	return +id
}

const checkProtocol = url => {
	if (url.indexOf(HTTPS) !== -1) {
		return HTTPS
	}
	return HTTP
}

const getId = (url, category) => {
	const protocol = checkProtocol(url)

	const id = url
		.replace(protocol + API_ROOT + category, '')
		.replace(/\//g, '')

	return id
}

export const getPeopleId = url => getId(url, API_SECOND)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`

