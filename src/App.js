
import cn from 'classnames';
import styles from './App.module.css';
import {getApi} from "./utils/api";

console.log(styles);
getApi();


function App() {



  return (
    <div className={cn(styles.header)}>



    </div>
  );
}

export default App;
