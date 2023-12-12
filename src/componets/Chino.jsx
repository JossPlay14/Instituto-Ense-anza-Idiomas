import React from 'react'
import { Container } from 'react-bootstrap'
import chin1 from '../assets/img/chin1.jpg';

export default function Chino() {
  return (
    <> 
    <div>
        <br />
    <h1 className="titulo2">Aprende chino</h1>
    <br />
    <h4 className="text1">¿Sabías que el chino es uno de los idiomas más hablados del mundo?
     Ya sea que estés planeando visitar China para hacer turismo o vayas a trabajar allí en un
      proyecto de 6 meses, aprender los conceptos básicos del idioma será extremadamente útil 
      en tu operación diaria. Obtén una introducción al idioma chino con cursos en línea de las 
      mejores universidades e instituciones. Los cursos en línea de edX incluyen videos extensos
       y otras herramientas para ayudarte a aprender habilidades de pronunciación además de 
       vocabulario y gramática básicos. Aprende los tonos, los caracteres y la estructura básica
        del idioma chino mandarín y practica la pronunciación básica y las habilidades de
         comunicación, todo desde la comodidad de tu computadora en cualquier parte del mundo.</h4>
        </div>
        <br />

        <Container>
        <img src={chin1} width="550" height="750"  />

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
