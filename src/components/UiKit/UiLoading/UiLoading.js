import styles from './UiLoading.module.css'
import PropTypes from 'prop-types'

import spinnerWhite from './img/spinner-white.svg'
import spinnerBlack from './img/spinner-black.svg'
import spinnerBlue from './img/spinner-blue.svg'


import { useEffect, useState } from 'react'

import cn from 'classnames'

const UiLoading = ({ theme = 'white', isShadow = true, classes }) => {

	const [spinnerIcon, setSpinnerIcon] = useState(null)

	useEffect(() => {
		switch (theme) {
		case 'black':
			setSpinnerIcon(spinnerBlack)
			break
		case  'white':
			setSpinnerIcon(spinnerWhite)
			break
		case  'blue':
			setSpinnerIcon(spinnerBlue)
			break
		default:
			setSpinnerIcon(spinnerWhite)
			break
		}
	}, [])
	return (

		<img
			src={spinnerIcon}
			alt="Spinner"
			className={cn(styles.loader, isShadow && styles.shadow, classes)}

		/>
	)
}

UiLoading.propTypes = {
	theme: PropTypes.string,
	isShadow: PropTypes.bool,
	classes: PropTypes.string,
}

export default UiLoading