import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

class EditTable extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'',
			email:''
		}
	}
	handleChange=(e)=>{
		console.log(e)
	}
	componentDidMount(){
		console.log("this props-",this.props)
		this.setState({
			name:this.props.user.name,
			email: this.props.user.email
		})
	}
	render(){
  return (
      <BrowserRouter>
      <tr>
          <td>Id</td>
          <td>
              {this.props.user._id}
          </td>
      </tr>
      <tr>
          <td>Name</td>
          <td>
              <input value={this.state.name} onChange={this.handleChange} type="text"/>
          </td>
      </tr>
      <tr>
          <td>Email</td>
          <td>
              <input value={this.state.email} onChange={this.handleChange} type="text"/>
          </td>
      </tr>
      <tr>
          <td colSpan='2'>
              	<button>Delete user</button>&nbsp;
              	<button>Update</button>
          </td>
      </tr>
      </BrowserRouter>
  )}
}

export default EditTable;
/*
function useFormInput(initialValue){
	console.log("initialValue is ",initialValue)
	const [value,setValue]=useState(initialValue)

	function handleChange(e){
		setValue(e.target.value)
	}
	return {
			value,
			onChange: handleChange
		}
}
*/