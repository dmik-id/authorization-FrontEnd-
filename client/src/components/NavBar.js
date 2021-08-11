  
import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import Landing from '../page/Landing';

const NavBar = observer(() =>{

    const {user} = useContext(Context)
    return (

        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar style= {{color:'red'}} to={Landing}>Landing</Navbar>

        {user.isAuth ?
            <Nav className="ml-auto">
                <button variant={'outline-light'}>Sign In</button>
                <button variant={'outline-light'}>Admin</button>
            </Nav>

            :
            <Nav className="ml-auto">
                <button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorisation</button>

            </Nav>
        }
        </Container>
    </Navbar>
    
    )
})

export default NavBar