import React from 'react'
import { Table , Button} from 'reactstrap';
import SortingData from './SortingData';

//TableData component to display the data 
const TableData = (props) => {
    //add sorting functionality 
    const {rows, requestSort, sortConfig } = SortingData(props.dataSource);
    
    //Add the sorting to the column depends on it's className
    const getClassNamesFor = (name) =>{
        if(!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    }

    return (
         <Table className="App-table" >
            <thead>
                <th>
                    <Button
                        outline
                        color="secondary"
                        //change click handler
                        onClick={() => requestSort('name')}
                        className={getClassNamesFor('name')}
                    >
                        <span>Name</span></Button></th>
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
