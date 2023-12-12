import { Col, Container, Row } from "react-bootstrap"
import ecue1 from '../assets/img/ecue1.jpg';
import escu2 from '../assets/img/escu2.jpg';
import escue3 from '../assets/img/escue3.jpg';
import escue4 from '../assets/img/escue4.jpg';
import escue5 from '../assets/img/escue5.jpg';
import escue6 from '../assets/img/escue6.jpg';
import escue7 from '../assets/img/escue7.jpg';
import escue8 from '../assets/img/escue8.jpg';
import escue9 from '../assets/img/escue9.jpg';
import escue10 from '../assets/img/escue10.jpg';
import escue11 from '../assets/img/escue11.jpg';
import escue12 from '../assets/img/escue12.jpg';


import React from 'react'

function Galeria() {
  return (
    <>
    <div>
    <h1 className="titulo2">Galería</h1>
    <Container>
      <Row>
        <Col>
        <img src={ecue1} width="350" height="350"/>

        </Col>

        <Col>
        <img src={escue9} width="350" height="350"/>

        </Col>
        
        <Col>
        <img src={escu2} width="350" height="350"/>

        </Col>
        <br />
      </Row>
      <br />

      <Row>
        <Col>
        <img src={escue3} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue10} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue4} width="350" height="350"/>

        </Col>
        <br />
      </Row>
      <br />

      <Row>
        <Col>
        <img src={escue5} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue11} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue6} width="350" height="350"/>

        </Col>
        <br />
      </Row>
      <br />

      <Row>
        <Col>
        <img src={escue7} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue12} width="350" height="350"/>

        </Col>
        <Col>
        <img src={escue8} width="350" height="350"/>

        </Col>
      </Row>




    </Container>

    </div>

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

export default Galeria