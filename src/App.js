import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './components/TableData';
import SearchFilter from './components/SearchFilter';
import Pagination from './components/Pagination';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

const App =() => {

  const [dataSource, setDataSource] = useState(data);

  //Add Pagination
  ////Set current Page
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);


  const filterTable =(filterTable) =>{
      setDataSource(filterTable)
  }

  //Change Page
  const paginate = pageNumber =>{
    setCurrentPage(pageNumber);
  }
  
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
            <SearchFilter dataSource={data}  filterTable={filterTable} />
            <Row>
              <Col>
                <TableData dataSource={dataSource} />
                <Pagination 
                  rowsPerPage={rowsPerPage} 
                  totalRows={data.length } 
                  paginate={paginate}
                />
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
}

export default App;
