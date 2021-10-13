import React, {useState, useMemo } from 'react'

const SortingData = (rows, config = null) => {
    //state the configuration
    const [sortConfig, setSortConfig] = useState(config);
    //use the built-in useMemo hook to memorize all the slow parts 
    //and make sure that we only sort our data when we need to, NOT on every render. 
    const sortedRows = useMemo(() => {
        let sortableRows = [...rows];
        //make the rows sortable in both directions
        if (sortConfig !== null) {
            sortableRows.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableRows;
    },[rows, sortConfig]);

    //function accepts the field name, and update the state accordingly
    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return  { rows: sortedRows, requestSort };
}

export default SortingData
