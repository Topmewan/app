import {THEME_DARK, THEME_LIGHT, THEME_NEUTRAL} from "../../../../context/ThemeProvider";
import light from "../img/light.jpg";
import styles from "../ChangeTheme.module.css";
import dark from "../img/dark.jpg";
import neutral from "../img/neutral.jpg";

export const elements = [
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