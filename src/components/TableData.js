import React from 'react'
import { Table } from 'reactstrap';

//TableData component to display the data 
const TableData = (props) => {
    
    return (
         <Table className="App-table" >
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </thead>
            <tbody>
            {props.dataSource.map( row => (
                <tr key={row._id}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                </tr>
            ))}
    
            </tbody>
        </Table>
    )
}

export default TableData
