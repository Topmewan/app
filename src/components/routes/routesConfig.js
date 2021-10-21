import HomePage from "../../pages/HomePage/HomePage";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import NotFound from "../NotFound/NotFound";

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
    {
        id:3,
        path:'/not-found',
        exact: true,
        component: NotFound,
    },
    {
        id:4,
        path:'*',
        exact: false,
        component: NotFound,
    },
]

export default routesConfig;