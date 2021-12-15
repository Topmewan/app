import ChangeThemeUi from "./ChangeThemeUi/ChangeThemeUi";
import {elements} from "./ChangeThemeElements/ChangeThemeElements";


import styles from './ChangeTheme.module.css';


const ChangeTheme = () => {

	return (
		<div className={styles.container}>
			{elements.map(({theme,img,text,classes},index)=> (
				<ChangeThemeUi
					key={index}
					theme={theme}
					text={text}
					img={img}
					classes={classes}
				/>
			))}

		</div>
	);
};



export default ChangeTheme;