import styles from './PeopleList.module.css';

const PeopleList = ({character}) => {
    return (
            <ul className={styles.list__container}>
                {character.map(({name,img,char_id}) =>
                    <li key={char_id} className={styles.list__item}>
                        <a href="#">
                            <img className={styles.person__photo} src={img} alt={name}/>
                            <p>{name}</p>
                        </a>
                    </li>)}
            </ul>
    );

}

export default PeopleList;