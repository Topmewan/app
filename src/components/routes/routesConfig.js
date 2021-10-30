import HomePage from "../../pages/HomePage/HomePage";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import NotFound from "../../pages/NotFound/NotFound";
import CharPage from "../../pages/CharPage/CharPage";

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
        path:'/people/:id',
        exact: true,
        component: CharPage,
    },
    {
        id:4,
        path:'/not-found',
        exact: true,
        component: NotFound,
    },
    {
        id:5,
        path:'*',
        exact: false,
        component: NotFound,
    },
]

export default routesConfig;