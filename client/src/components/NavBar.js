import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LANDING_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import { Container } from '@material-ui/core';
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
import Appbar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Appbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={LANDING_ROUTE}>landing</NavLink>
                {user.isAuth ?
                    <Link className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin Panel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Sign Out
                        </Button>
                    </Link>
                    :
                  
                        <Button  variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
                  
                }
            </Container>
        </Appbar>

    );
});

export default NavBar;