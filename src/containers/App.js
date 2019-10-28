import React,{Component} from 'react';
import '../App.css';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewUsers from '../components/ViewUsers';
import CreateUser from '../components/CreateUser';
import EditUser from '../containers/EditUser';

class App extends Component{
  render(){
  return (
    <Router>
    <div className="App">
      <header>
        <Navbar bg="info" expand="md">
				  <Navbar.Brand href="#">BookInf</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Link className="nav-link" to={"/createuser"}>Create User</Link>
				      <Link className="nav-link" to={"/viewusers"}>View Users</Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={ViewUsers}/>
              <Route path="/createuser" component={CreateUser}/>
              <Route path="/viewusers" component={ViewUsers}/>
              <Route path="/edituser/:userid" component={EditUser}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  )
  }
}

export default App;
