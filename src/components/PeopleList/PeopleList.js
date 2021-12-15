import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import styles from './PeopleList.module.css';

const PeopleList = ({character}) => {
	return (
		<ul className={styles.list__container}>
			{character.map(({name,img,id}) =>
				<li key={id} className={styles.list__item}>
					<Link to={`/people/${id}`}>
						<img className={styles.person__photo} src={img} alt={name}/>
						<p>{name}</p>
					</Link>
				</li>)}
		</ul>
	);
}

PeopleList.propTypes = {
	character: PropTypes.array
}

export default PeopleList;