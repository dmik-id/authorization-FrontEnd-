import React from "react";
import { Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { Reaction } from "mobx";



const Auth = () =>{

  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE


  return(
    <Container className ="d-flex justify-content-center align-items-center"
      style = {{height: window.innerHeight -54}}>
    
    <Card>
        <h2>{isLogin ? 'Authorisation': 'Registrate'  }</h2>
        <Form className ="d-flex flex-column">
          <Form.Control 
                        className="mt-3"
                        placeholder="email"
          />
          <Form.Control 

                        placeholder="Password"
          />

          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            {isLogin ?
                              <div>
                                  <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                              </div>
                            :

                              <div>
                                  <NavLink to={LOGIN_ROUTE}>Sign In</NavLink>
                              </div>
                            }


            <button>
              {isLogin ? 'Sign IN' : 'Registrate'}
            </button>
          </Row>

        </Form>
      </Card>
    </Container>
  )
}

export default Auth;
