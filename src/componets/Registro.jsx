import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import usuario from '../assets/img/usuario.jpg';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Puedes realizar la lógica de registro aquí
    // ...

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <br />
    <h1 className="titulo2"> Registrate en el Instituto</h1>
    <br />

     <Container>
        <Row>
            <Col>
            <img src={usuario} width="350" height="350"/>
            
            </Col>
       
            <Col>
            <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Nombre de usuario:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
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
  );
};

export default RegistrationForm;
