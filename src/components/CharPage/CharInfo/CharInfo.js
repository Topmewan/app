import styles from './CharInfo.module.css';
import PropTypes from "prop-types";

const CharInfo = ({charInfo}) => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list__container}>
				{charInfo.map(({title,data})=> (
					data && (
						<li className={styles.list__item} key={title}>
							<span className={styles.item__title}>{title}</span>: {data}
						</li>
					)
				))}
			</ul>
		</div>
	);
};

CharInfo.propTypes = {
	charInfo:PropTypes.array
}

export default CharInfo;
