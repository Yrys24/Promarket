import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './products.json'
import Components from './components.js'

import Card1 from './Card1'
import './App.css'
import { Row } from 'react-bootstrap';
import { useState } from 'react';

function NavScrollExample() {
  const [dis, setDis] = useState('')
  const [dis1, setDis1] = useState(false)
  const [dis2, setDis2] = useState(null)
  const [dis3, setDis3] = useState("")
  const t = Product.filter(a => {
    if (dis1) {
      return a.discount !== null
    } else if (dis2 !== null) {
      return a.category_id === dis2.id
    }
    if (a.title.toLowerCase().includes(dis3.toLowerCase())) {
      return true
    } else {
      return false
    }
  })
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ProMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={() => {
                setDis("")
                setDis1(false)
                setDis2(null)
                setDis3("")
              }} href="#action1">Главная</Nav.Link>
              <Nav.Link onClick={() => {
                setDis("")
                setDis1(true)
                setDis2(null)
                setDis3("")
              }} href="#action2">Скидки</Nav.Link>
              <NavDropdown title="Катогории" id="navbarScrollingDropdown">
                {Components.map((el) => {
                  return (
                    <NavDropdown.Item
                      onClick={() => {
                        setDis("")
                        setDis1(false)
                        setDis2(el)
                      }}
                      href="#action4">{el.short_title}</NavDropdown.Item>
                  )
                })}
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={(e) => setDis(e.target.value)}
                value={dis}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button onClick={() => setDis3(dis)} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {!dis1 ? null : <div style={{ marginLeft: '150px', padding: '15px', }}> Скидки</div>}
      {!dis2 ? null : <div style={{ marginLeft: '150px', padding: '15px', }}> {dis2.short_title}</div>}
      {!dis3 ? null : <div style={{ marginLeft: '150px', padding: '15px', }}> Результаты поиска {t.length === 0 ? <h1> Не найден </h1> : <h6> ({t.length})</h6>} </div>}
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', padding: '5px', }}>

        {t.map(e => {
          return (
            <Card1
              data={e}
            />
          )
        })
        }
      </div>


    </>

  );
}

export default NavScrollExample;