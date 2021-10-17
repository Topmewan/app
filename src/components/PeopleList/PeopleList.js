import styles from './PeopleList.module.css';

const PeopleList = ({character}) => {
    return (
        <>
            <ul>
                {character.map(({name,img,char_id}) =>
                    <li key={char_id}>
                        <img src={img} alt={name}/>
                        <p>{name}</p>
                    </li>)}
            </ul>
        </>
    );

}

export default PeopleList;