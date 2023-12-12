import React from 'react'
import { Container } from 'react-bootstrap'
import rus1 from '../assets/img/rus1.jpg';
import rus2 from '../assets/img/rus2.jpg';
import rus3 from '../assets/img/rus3.jpg';

function Ruso() {
  return (
    <>
    <div>
      <br />
    <h1 className="titulo2">RUSO</h1>
        <h2>Gramática:</h2>
        <h4 className="text1">El ruso es una lengua eslava y tiene una gramática distinta en comparación con las lenguas romances o germánicas.
         Utiliza la declinación de sustantivos, adjetivos, pronombres y numerales. Hay seis casos gramaticales: Nominativo, Genitivo, Dativo, Acusativo, Instrumental y Preposicional.
         El género de los sustantivos es masculino, femenino o neutro.</h4>

         <h2>Pronunciación:</h2>
         <h4 className="text1">El acento en las palabras rusas generalmente recae en la primera sílaba.
         Algunos sonidos pueden ser desafiantes para hablantes de otras lenguas, como la "р" fuerte (r) y la "ы" 
         (una vocal no presente en muchos otros idiomas).</h4>
         <br />
          <Container>
          <img src={rus1} width="650" height="450"  />

          </Container>
          <br />

         <h2>Escritura:</h2>
         <h4 className="text1">Como se mencionó anteriormente, el ruso utiliza el alfabeto cirílico, que es diferente al alfabeto latino.
         La escritura cursiva es común y se enseña desde la escuela primaria.</h4>

         <h2>Cultura y Historia:</h2>
         <h4 className="text1">La lengua rusa es esencial para comprender la rica historia y cultura de Rusia. La literatura rusa, con autores como Tolstói, Dostoievski y Pushkin, ha tenido un impacto significativo en la literatura mundial.
          La música rusa, la danza y las artes visuales también desempeñan un papel crucial en la identidad cultural rusa.</h4>
           <br />
          <Container>
          <img src={rus2} width="850" height="550"  />

          </Container>
          <br />

          <h2>Recursos para Aprender Ruso:</h2>
          <h4 className="text1">Puedes encontrar cursos en línea, aplicaciones y libros de gramática para aprender ruso.
          Practicar con hablantes nativos o compañeros de estudio puede ser beneficioso para mejorar tus habilidades conversacionales.
           La inmersión cultural, como ver películas y programas de televisión en ruso, también puede ser útil.</h4>
          <br />
           <Container>
          <img src={rus3} width="850" height="550"  />

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

export default Ruso