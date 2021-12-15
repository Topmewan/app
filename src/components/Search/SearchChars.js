import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import styles from './SearchChars.module.css';

const SearchChars = ({charInSearch}) => {

	return (
		<>
			{charInSearch.length
				? (
					<ul className={styles.list__container}>
						{charInSearch.map(({id,img,name}) =>

							<li
								className={styles.list__item}
								key={id}
							>
								<Link to={`/people/${id}`}>
									<img  className={styles.person__photo} src={img} alt={name}/>
									<p className={styles.person__name}>{name}</p>
								</Link>

							</li>

						)}

					</ul>
				)
				: <h2 className="header__text">No Results</h2>}


		</>
	);
};

SearchChars.propTypes = {
	charInSearch: PropTypes.array

}

export default SearchChars;