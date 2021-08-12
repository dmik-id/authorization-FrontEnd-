import React, { useState, useContext } from "react";
import { getAll } from "../http/userAPI";
import {Context} from "../index";


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
    <div>
      UserList
      <button onClick={click}>User List</button>
    </div>
  )
}

export default UserList;
