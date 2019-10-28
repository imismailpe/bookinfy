import React,{Component} from 'react';
import axios from 'axios';
import DataTable from './DataTable';

export default class ViewUsers extends Component{
	constructor(props){
		super(props)
		this.state={
			usersCollection:[]
		}
	}
	componentDidMount(){
		axios.get('http://localhost:4000/users')
		.then((res)=>{
			//console.log(res.data)
			this.setState({usersCollection: res.data})
			//console.log(this.state.usersCollection);
		}).catch((error)=>{
			console.log(error)
		})
	}

	dataTable() {
    return this.state.usersCollection.map((data) => {
    	//console.log("inside map---",data)
      return <DataTable user={data} key={data._id} />;
    });
  }
	render(){
		return(
			<div className="wrapper-users">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.dataTable()}
            </tbody>
          </table>
        </div>
      </div>
		)
	}
}