import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './components/TableData';
import SearchFilter from './components/SearchFilter';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

const App =() => {

  const [dataSource, setDataSource] = useState(data);

  const filterTable =(filterTable) =>{
      setDataSource(filterTable)
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
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
}

export default App;
