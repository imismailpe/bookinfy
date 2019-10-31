import React from 'react';
import {Link} from 'react-router-dom';

export default function DataTable({props}){
    return (
        <tr>
            <td>
                {props._id}
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                <Link className="nav-link" to={`/edituser/${props._id}`}>Edit</Link>
            </td>
            
        </tr>
    )
}