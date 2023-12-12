import React from 'react'
import logoJoss from '../assets/img/logoJoss.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'

function Creditos() {
  return (
    <> 
    <br />
    <Container className="cont-md">
      <Row>
        <Col>

        </Col>
        <Col>

        <Card style={{ width: '20rem' }}>
      <img src={logoJoss} width="250" height="250"  />
      <Card.Body>
        <Card.Title>JOSE ALFREDO CHOQUE CHOQUE</Card.Title>
        <Card.Text>
          CI: 9900040
          <br />
          Materia: INF-122 Paralelo 'D'

          
        </Card.Text>
        <Button variant="primary">Apoyar</Button>
      </Card.Body>
    </Card>
        
        </Col>

        <Col>
        
        </Col>
      </Row>
    </Container>
    <br />
    <br />

    <div>
    <footer className="bg-light text-dark p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Información de contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Email: info@example.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>Istitutos de Enseñanza de Idiomas</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.firstclassinstitute.edu.bo/home.html">Instituto first</a></li>
              <li><a href="https://www.papora.com/es/cursos-ingles/bolivia/">Papora</a></li>
              <li><a href="https://www.cursos-academicos.com/">KEYSTONE</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
    
     
     </>
    
  )
}

export default Creditos