import React,{Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
	constructor(props){
		super(props);
		this.onSubmit=this.onSubmit.bind(this);
		this.onNameChange=this.onNameChange.bind(this);
		this.onEmailChange=this.onEmailChange.bind(this);
		this.onPasswordChange=this.onPasswordChange.bind(this);
		this.state={
			name:'',
			email:'',
			password:''
		}
	}
	onNameChange=(e)=>{
		this.setState({name:e.target.value})
	}
	onEmailChange=(e)=>{
		this.setState({email:e.target.value})
	}
	onPasswordChange=(e)=>{
		this.setState({password:e.target.value})
	}
	onSubmit=(e)=>{
		e.preventDefault();
		const userObject={
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}
		console.log(typeof userObject)
		axios.post('http://localhost:4000/create',userObject)
			.then((res)=>{
				console.log(res.data)
			}).catch((error)=>{
				console.log(error)
			})
		this.setState({
			name:'',
			email:'',
			password:''
		})
	}
	render(){
	return(
		<div className="wrapper">
			<form onSubmit={this.onSubmit}>
				<div className="form-group row">
					<label className="col-sm-4">Name:</label>
					<input name="name" type="text" className="form-control col-sm-8" onChange={this.onNameChange}/>
				</div>
				<div className="form-group row">
					<label className="col-sm-4">Email:</label>
					<input type="email" className="form-control col-sm-8" onChange={this.onEmailChange}/>
				</div>
				<div className="form-group row">
					<label className="col-sm-4">Password:</label>
					<input type="password" className="form-control col-sm-8" onChange={this.onPasswordChange}/>
				</div>
				<button type="submit" className="btn btn-success">Submit</button>
			</form>
		</div>
	)
}
}
