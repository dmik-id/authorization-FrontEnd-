import React from "react";
import { Container, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { registration } from "../../http/userAPI";



const Auth = () =>{
  const location = useLocation()

  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const signIn = async () =>{
    if(isLogin){
      const respones = await login()

    }
    else {
      const respones = await registration(email,password)
      console.log(respones)
    }
  }



  return(
    <Container className ="d-flex justify-content-center align-items-center"
      style = {{height: window.innerHeight -54}}>
    
    <Card>
        <h2>{isLogin ? 'Authorisation' : 'Registration'} </h2>
        <Form className ="d-flex flex-column">
          <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
          />

          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Registrate</NavLink>
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
