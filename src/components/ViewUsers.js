import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import {BrowserRouter,Link} from 'react-router-dom';

export default function ViewUsers(){
	const [usersCollection,setUsersCollection] = useState([])

	useEffect(()=>{
		axios.get('http://localhost:4000/users')
		.then((res)=>{
			setUsersCollection(res.data)
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
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {
          	usersCollection.map((data) => {
				return <DataTable props={data} key={data._id} />
			})
          }
          </tbody>
        </table>
      </div>
    </div>
	)
}