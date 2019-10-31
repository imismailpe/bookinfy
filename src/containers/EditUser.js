import React,{useState,useEffect} from 'react';
import axios from 'axios';
import EditTable from '../containers/EditTable';

export default function EditUser(props){
	const [userInEdit,setUserInEdit] = useState()
	const [isLoading,setIsLoading] = useState(true)

	useEffect(()=>{
		setIsLoading(true)
		axios.get(`http://localhost:4000/users/edit/${props.match.params.userid}`)
		.then((res)=>{
			setUserInEdit(res.data)
			setIsLoading(false)
		}).catch((error)=>{
			console.log(error)
		})
	},[])
	
	return(
		<div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Field</td>
                <td>Value</td>
              </tr>
            </thead>
            <tbody>
              {!isLoading && <EditTable props={userInEdit} />}
            </tbody>
          </table>
        </div>
      </div>
		)
}