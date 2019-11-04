import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {submitUserUpdate, submitUserDelete} from '../../actions';

export default function EditTable({props}){
  const uId = props._id
  const uName = useData(props.name)
  const uEmail = useData(props.email)
  const dispatch = useDispatch()

  const submitUpdate = ()=>{
    const userObject={
      userid: uId,
      name: uName.value,
      email: uEmail.value
    }
    console.log("submitted data is ", userObject)
    console.log("userid is ",props._id)
    dispatch(submitUserUpdate(userObject))
  }
  const submitDelete = ()=>{
    const userObject={
      userid: uId,
      name: uName.value,
      email: uEmail.value
    }
    console.log("submitted data is ", userObject)
    console.log("userid is ",props._id)
    dispatch(submitUserDelete(userObject))
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
              	<button onClick={submitDelete}>Delete user</button>&nbsp;
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