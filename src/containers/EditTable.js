import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function EditTable({props}){
  const uName = useData(props.name)
  const uEmail = useData(props.email)

  const submitUpdate = ()=>{
    const userObject={
      name: uName.value,
      email: uEmail.value
    }
    console.log("submitted data is ", userObject)
    console.log("userid is ",props._id)
    axios.put(`http://localhost:4000/users/update/${props._id}`,userObject)
    .then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
      <React.Fragment>
      <tr>
          <td>Id</td>
          <td>
              {props._id}
          </td>
      </tr>
      <tr>
          <td>Name</td>
          <td>
              <input {...uName} type="text"/>
          </td>
      </tr>
      <tr>
          <td>Email</td>
          <td>
              <input {...uEmail} type="email"/>
          </td>
      </tr>
      <tr>
          <td colSpan='2'>
              	<button>Delete user</button>&nbsp;
              	<button onClick={submitUpdate}>Update</button>
          </td>
      </tr>
      </React.Fragment>
  )
}
function useData(initialValue){
  const [value,setValue] = useState(initialValue)
  
  function handleChange(e){
    setValue(e.target.value)
  }
  return{
    value,
    onChange: handleChange
  }
}