//Componetns
import PeoplePage from './pages/PeoplePage/PeoplePage';
import cn from 'classnames';
import styles from './App.module.css';
import {getApi} from "./utils/getApi";

console.log(styles);
getApi();


function App() {


  return (
    <div className={cn(styles.header)}>
      <PeoplePage/>
    </div>
  );
}

export default App;
