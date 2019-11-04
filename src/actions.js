import {CALLING_API,FINISHED_API} from './constants';
import axios from 'axios';

export const submitNewUser = (user) => {
	return dispatch => {
		dispatch({type: CALLING_API, payload: "Creating.."})
		axios.post('http://localhost:4000/users/create',user)
		.then((res)=>{
			console.log(res.data)
			dispatch({type: FINISHED_API, payload: "Created user successfully"})
		}).catch((error)=>{
			console.log(error)
		})
	}
}
export const submitUserUpdate=(user)=>{
	return dispatch =>{
		console.log("updating..",user)
		dispatch({type:CALLING_API, payload: "Updating.."})
		axios.put(`http://localhost:4000/users/update/${user.userid}`,user)
  		  .then((res)=>{
	      console.log("updated..",res)
	      dispatch({type: FINISHED_API, payload: "Updated user successfully"})
    	}).catch((error)=>{
	      console.log("error--",error)
  	  })
  }
}
export const submitUserDelete=(user)=>{
	return dispatch =>{
		console.log("stating delete")
		dispatch({type:CALLING_API, payload: "Deleting.."})
		axios.delete(`http://localhost:4000/users/delete/${user.userid}`,user)
		.then((res)=>{
			dispatch({type:FINISHED_API,payload: "Deleted user successfully"})
			console.log("deleted..",res)
		}).catch((error)=>{
			console.log("error--",error)
		})
	}
}