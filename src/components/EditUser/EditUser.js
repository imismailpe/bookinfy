import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import EditTable from './EditTable';
import Spinner from '../Spinner/Spinner';

export default function EditUser(props){
	const [userInEdit,setUserInEdit] = useState()
	const [isLoading,setIsLoading] = useState(true)
	const alertMessage = useSelector(state=>state.statusMessage)

	useEffect(()=>{
		setIsLoading(true)
		axios.get(`http://localhost:4000/users/edit/${props.match.params.userid}`)
		.then((res)=>{
			setUserInEdit(res.data)
			setIsLoading(false)
		}).catch((error)=>{
			console.log(error)
		})
	},[props.match.params.userid])
	
	return(
		<div className="wrapper-users">
			{alertMessage?<div className="alert alert-success" role="alert">{alertMessage}</div>:null}
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>Field</td>
                <td>Value</td>
              </tr>
            </thead>
            <tbody>
              {isLoading?<Spinner/>:<EditTable props={userInEdit} />}
            </tbody>
          </table>
        </div>
      </div>
		)
}