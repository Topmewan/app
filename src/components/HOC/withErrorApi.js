import PeopleList from "../PeopleList/PeopleList";
import {useState} from "react";


export const withErrorApi = (View) => {

    return props => {
        const [errorApi,setErrorApi] = useState(false);

        return (
            <>
                {errorApi ?
                    <h1>Error</h1> :
                    <div>
                        {<View setErrorApi={setErrorApi}
                        {...props}
                        />}
                    </div>
                }
            </>
        );
    }

}