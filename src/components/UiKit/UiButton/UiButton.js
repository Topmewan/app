import styles from './UiButton.module.css'
import PropTypes from 'prop-types'
import '../index.css'
import cn from 'classnames'


const UiButton = ({
	text,
	onClick,
	disabled,
	theme = 'dark',
	classes,

}) => {

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(styles.button, styles[theme], classes)}
		>
			{text}
		</button>
	)
}

UiButton.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	nexPage: PropTypes.bool,
	theme: PropTypes.string,
	classes: PropTypes.string,
}

export default UiButton