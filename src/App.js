import React, { useState, useEffect } from 'react';
import { Table, Col, Container, Row, Label, FormText, Form, FormGroup, Input, Collapse, Button, CardBody, Card } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [sectors, setSectors] = useState('');
  const [terms, setTerms] = useState('');
  const [view, setView] = useState([]);

  useEffect(() => {
    setView(JSON.parse(localStorage.getItem("items")))
  }, []);
  const handleSubmit = () => {
    let data = {
      name, sectors, terms
    }

    localStorage.setItem('items', JSON.stringify(data));

  }
  return (
    <div className="App">
      <Container >
        <Row>
          <Col xs={12} md={6} lg={6} >
            <p>Please enter your name and pick the Sectors you are currently involved in.</p>
            <Form onSubmit={handleSubmit}>
              <FormGroup >
                <Row>
                  <Col xs={2} md={2} lg={2}>
                    <Label for="exampleEmail">
                      Name:
                    </Label>
                  </Col>
                  <Col xs={10} md={10} lg={10}>
                    <Input
                      id="exampleEmail"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Plz write your name"
                      type="text"
                      required
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col xs={2} md={2} lg={2}>
                    <Label for="exampleSelect">
                      Sectors:
                    </Label>
                  </Col>
                  <Col xs={10} md={10} lg={10}>
                    <Input
                      id="exampleSelect"
                      name="select"
                      onChange={(e) => setSectors(e.target.value)}
                      type="select"
                      required
                    >
                      <option value="">
                        --Select--
                      </option>
                      <option value="Construction materials">
                        Construction materials
                      </option>
                      <option value="Electronics and Optics">
                        Electronics and Optics
                      </option>
                      <option value="Food and Beverage">
                        Food and Beverage
                      </option>
                      <option value="Bakery & confectionery products">
                        Bakery & confectionery products
                      </option>
                      <option value="Fish & fish products">
                        Fish & fish products
                      </option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col xs={8} md={6} lg={6}>
                  <FormGroup check style={{ marginLeft: `89px`, marginButton: `10px` }}>
                    <Input type="checkbox" value="yes" onChange={(e) => setTerms(e.target.value)} required />
                    <Label check>
                      Agree to terms
                    </Label>
                  </FormGroup>

                </Col>
              </Row>

              <Row>
                <Col xs={2} md={2} lg={2}>

                </Col>
                <Col xs={2} md={2} lg={2}>
                  <Button className='mt-3 mr-3' type='submit'>
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>


          <Col xs={12} md={6} lg={6} className='mb-4'>
            <p className=''>View Your Data</p>
            <Table
            >
              <thead>
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Sectors
                  </th>
                  <th>
                    Agree to terms
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {view?.name}
                  </td>
                  <td>
                    {view?.sectors
                    }
                  </td>
                  <td>
                    {view?.terms}
                  </td>
                </tr>

              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
