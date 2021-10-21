import HomePage from "../../pages/HomePage/HomePage";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";

const routesConfig  = [
    {
        id:1,
        path:'/',
        exact: true,
        component: HomePage,
},
    {
        id:2,
        path:'/people',
        exact: true,
        component: PeoplePage,
    },
]

export default routesConfig;