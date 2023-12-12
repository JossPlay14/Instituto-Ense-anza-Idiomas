import React from 'react'
import ReactPlayer from 'react-player'



function Eventos() {
  return (
    <>
     <br />
       <div> 
        <h2 className="titulo2">20 Idiomas mas Ablados del mundo</h2>
        <ReactPlayer
        url='https://www.youtube.com/watch?v=fLPOJAZtnrE&t=18s'
        width='50%'
        height='50%'
        controls
        playing
        muted
        onEnded={()=>alert('termino el video')}

        
        />
        
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

export default Eventos