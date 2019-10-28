import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

class DataTable extends Component {
    render() {
        return (
            <tr><BrowserRouter>
                <td>
                    {this.props.user._id}
                </td>
                <td>
                    {this.props.user.name}
                </td>
                <td>
                    {this.props.user.email}
                </td>
                <td>
                    	<Link to={`/edituser/${this.props.user._id}`}>Edit</Link>
                </td>
                <td>
                    	<Link to={`/delete/${this.props.user._id}`}>Delete</Link>
                </td>
                </BrowserRouter>
            </tr>
        );
    }
}

export default DataTable;