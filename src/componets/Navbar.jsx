import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Instituto</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/inicio">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/galeria">Galeria</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/registro">Registro</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/metodologia">Metodologia</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/eventos">Eventos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ingles">Ingles</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/chino">Chino</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/frances">Frances</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ruso">Ruso</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/creditos">Creditos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </div>

    

    
    </>
  )
}

export default Navbar