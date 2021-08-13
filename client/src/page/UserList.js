import React, { useState, useContext } from "react";
import { getAll } from "../http/userAPI";
import {Context} from "../index";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";


const UserList = () =>{

  const click = async () => {
    try {
        const data = await getAll();
        console.log(data)
    } catch (e) {
        alert(e.response.data.message)
    }
  }

  return(
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
        <div>
          <Button
            variant={"outline-success"}
            onClick={click}>
               User List
          </Button>
        </div>


    </Container>
  )
}

export default UserList;
