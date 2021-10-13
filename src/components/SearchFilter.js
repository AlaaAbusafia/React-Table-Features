import React, {useState} from 'react';
import {Row, Input, Button} from 'reactstrap';


const SearchFilter = ({dataSource, filterTable }) => {
    // set search value to empty string
    const [searchValue, setSearchValue] = useState('');
    //set search parameters
    //search data only by name, email and phone
    const [searchParam] = useState(['name', 'email', 'phone']);
    
    //Search filter for our columns
    const searchHandleChange =(e)=>{
        setSearchValue(e.target.value);

        //assign in filteredData the results of filter function that takes data and returns all 
       //the items that match anything in our searchParam array
       // if the indexOF() is > -1
        const filteredData = dataSource.filter(row => {
            return searchParam.some((newRow) => {
                return (
                  row[newRow]
                  .toString()
                  .toLowerCase()
                  .indexOf(e.target.value.toLowerCase()) > -1
                );
            });
        }); 
        filterTable(filteredData);
    }

     // function resets the search Input value and the data table
    const handleReset =()=>{
        setSearchValue('');
        filterTable(dataSource);
    }
    
    return (
        <Row style={{ margin: '10px 0'}}>
            <Input style={{ width: '50%'}}
                placeholder="Search..."
                value={searchValue}
                onChange= {searchHandleChange}
            
            />
            <Button
                close
                type="reset"
                onClick={handleReset}
                className="reset-btn"
            />
        </Row>
    )
}

export default SearchFilter
