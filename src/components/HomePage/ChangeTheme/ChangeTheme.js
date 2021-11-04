import {useTheme,THEME_LIGHT,THEME_NEUTRAL,THEME_DARK} from "../../../context/ThemeProvider";


import styles from './ChangeTheme.module.css';

const ChangeTheme = () => {

    const isTheme = useTheme();

    return (
        <div>
            {isTheme.theme}
            <button onClick={()=> isTheme.change(THEME_LIGHT)}>Light</button>
            <button onClick={()=> isTheme.change(THEME_DARK)}>Dark</button>
            <button onClick={()=> isTheme.change(THEME_NEUTRAL)}>Neutral</button>
        </div>
    );
};



export default ChangeTheme;