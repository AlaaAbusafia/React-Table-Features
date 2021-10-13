import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './components/TableData';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

class App extends Component {




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
            <Row>
              <Col>
              <TableData dataSource={data} />
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
  }
}

export default App;
