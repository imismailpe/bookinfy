import React,{useState} from 'react';
import axios from 'axios';

export default function CreateUser(){
	const uName = useFormInput('')
	const uEmail = useFormInput('')
	const uPassword = useFormInput('')

	const submitForm=(e)=>{
		e.preventDefault();
		const userObject={
			name: uName.value,
			email: uEmail.value,
			password: uPassword.value
		}
		axios.post('http://localhost:4000/create',userObject)
			.then((res)=>{
				console.log(res.data)
			}).catch((error)=>{
				console.log(error)
			})
	}

	return(
		<div className="wrapper">
			<form onSubmit={submitForm}>
				<div className="form-group row">
					<label className="col-sm-4">Name:</label>
					<input {...uName} name="name" type="text" className="form-control col-sm-8" />
				</div>
				<div className="form-group row">
					<label className="col-sm-4">Email:</label>
					<input {...uEmail} type="email" className="form-control col-sm-8"/>
				</div>
				<div className="form-group row">
					<label className="col-sm-4">Password:</label>
					<input {...uPassword} type="password" className="form-control col-sm-8"/>
				</div>
				<button type="submit" className="btn btn-success">Submit</button>
			</form>
		</div>
	)
}
function useFormInput(initialValue){
	const [value,setValue] = useState(initialValue)
	function handleChange(e){
		setValue(e.target.value)
	}
	return {
		value,
		onChange: handleChange
	}
}