import React,{Component} from 'react';
import axios from 'axios';
import EditTable from '../containers/EditTable';

export default class EditUser extends Component{
	constructor(props){
		super(props)
		this.state={
			user:{}
		}
	}
	componentDidMount(){
		axios.get(`http://localhost:4000/edituser/${this.props.match.params.userid}`)
		.then((res)=>{
			//console.log(res.data)
			this.setState({user: res.data})
			console.log("editing -",this.state.user);
		}).catch((error)=>{
			console.log(error)
		})
	}

	render(){
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
              <EditTable user={this.state.user} />
            </tbody>
          </table>
        </div>
      </div>
		)
	}
}