import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';


const PeopleList = ({character}) => {
    return (
            <ul className={styles.list__container}>
                {character.map(({name,img,id}) =>
                    <li key={id} className={styles.list__item}>
                        <a href="#">
                            <img className={styles.person__photo} src={img} alt={name}/>
                            <p>{name}</p>
                        </a>
                    </li>)}
            </ul>
    );

}

PeopleList.propTypes = {
    character: PropTypes.array
}

export default PeopleList;