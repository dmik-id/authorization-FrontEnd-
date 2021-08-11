import Admin from "./page/Admin"
import Auth from "./page/Auth"
import Landing from "./page/Landing"
import UserList from "./page/UserList"
import { ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USERLIST_ROUTE } from "./utils/consts"

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin 
    },
    {
        path: USERLIST_ROUTE,
        Component: UserList
    }


]

export const publicRoutes =[
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }



]
