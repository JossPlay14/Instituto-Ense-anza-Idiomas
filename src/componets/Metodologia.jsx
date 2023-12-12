import React from 'react'
import { Container } from 'react-bootstrap'
import met1 from '../assets/img/met1.png';
import met2 from '../assets/img/met2.png';
import met3 from '../assets/img/met3.jpg';

function Metodologia() {
  return (
    <><div>
        <br />
        <h1 className="titulo2">METODOLOGÍA DE ENSEÑANZA</h1>
        <h4 className="text1">El sistema de enseñanza “Work-Based Training" tiene como objetivo incorporar el quehacer laboral del ejecutivo en el diseño fundamental del curso, transforma el quehacer laboral a clases. 

Los cursos del área In Company toman las actividades y responsabilidades laborales del alumno como punto de partida para el desarrollo de las habilidades comunicativas en el idioma. </h4>
        <br />
        <Container>
        <img src={met3} width="850" height="450"  />

        </Container>
        <br />
        <h4 className="text1">Asimismo, el CIDUP brinda el sistema "Goal Achievement​", a fin de brindar un aprendizaje efectivo y rápido de la lengua a estudiar. El mencionado sistema se 
        caracteriza por brindar a los participantes logros concretos de aprendizaje en cada una de las sesiones de clase. El principal objetivo del sistema es que, en cada lección, el alumno 
        desarrolle habilidades comunicativas en el nuevo idioma y sea capaz de ponerlas en práctica de manera inmediata en situaciones propias de su contexto laboral.</h4>
        
        <br />
        <Container>
        <img src={met1} width="850" height="450"  />

        </Container>
        <br />
        <h4 className="text1">El sistema "Goal Achievement​" se caracteriza por poner como eje central del curso las labores de los participantes, promoviendo un aprendizaje efectivo 
        en cada una de las sesiones de clase, no teniendo el alumno que esperar a culminar el curso o un nivel para medir sus resultados.</h4>
        <br />
        <Container>
        <img src={met2} width="850" height="450"  />

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

export default Metodologia