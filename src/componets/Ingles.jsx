import React from 'react'
import { Container } from 'react-bootstrap'
import ing1 from '../assets/img/ing1.jpg';
import ing2 from '../assets/img/ing2.jpg';

export default function Ingles() {
  return (
    <>
    <div>
        <br />
        <h1 className="titulo2">Cómo empezar a aprender inglés básico</h1>
        <br />
        <h4 className="text1">El vocabulario básico del inglés está conformado por 
        verbos, sustantivos, adjetivos, adverbios, preguntas, números y medidas de tiempo que 
        tienen que ver con actividades diarias de cualquier persona, tales como comer, dormir, 
        trabajar, etcétera. A continuación te encontrarás con elementos con los que debes 
        empezar y concentrarte para aprender.</h4>
        <br />

        <h3>Verbos básicos</h3>

        <h4 className="text1">De entre todos los verbos que tiene el inglés, los verbos básicos, 
        como to be  y to get , están presentes en oraciones sobre cualquier tema e incluso pueden 
        servir como auxiliares para otros verbos, por eso forman parte de los conocimientos 
        del inglés para principiantes. Es importante que los aprendas porque se usan en todo 
        tipo de conversaciones. Los principales son estos cuatro:</h4>
        <br />

        <Container>
            <img src={ing1} width="850" height="450"  />

        </Container>
           <br />
        <h3>Verbos de todos los días</h3>
        <h4 className="text1">Se calcula que el inglés tiene alrededor de 9 mil verbos regulares y más de 200 irregulares. 
        Sin embargo, la gran mayoría de ellos no son de uso diario y algunos están en desuso. 
        Por lo que puedes enfocar tus fuerzas en aprender los siguientes 30 verbos básicos 
        del inglés para principiantes con los que podrás realizar oraciones un poco más complejas:</h4>
        <br />
        <Container>
            <img src={ing2} width="650" height="=850"  />

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
