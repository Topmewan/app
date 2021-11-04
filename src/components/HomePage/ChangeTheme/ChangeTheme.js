import {useTheme,THEME_LIGHT,THEME_NEUTRAL,THEME_DARK} from "../../../context/ThemeProvider";
import light from './img/light.jpg';
import dark from './img/dark.jpg';
import neutral from './img/neutral.jpg';


import styles from './ChangeTheme.module.css';
import ChangeThemeUi from "./ChangeThemeUi/ChangeThemeUi";



const ChangeTheme = () => {

    const elements = [
        {
            theme: THEME_LIGHT,
            text:'Light Mode',
            img:light,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text:'Dark Mode',
            img:dark,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEUTRAL,
            text:'Neutral Mode',
            img:neutral,
            classes: styles.item__neutral
        },
    ]


    return (
        <div className={styles.container}>
            {elements.map((element,index)=> (
                <ChangeThemeUi
                key={index}
                theme={element.theme}
                text={element.text}
                img={element.img}
                classes={element.classes}
                />
            ))}

        </div>
    );
};



export default ChangeTheme;