import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Container>
      <h1>UI Mockup</h1>
      <Button>
        <Link className="text-white text-decoration-none px-2" to="/login">
          Login Page
        </Link>
      </Button>
      <br />
      <Button className="mt-2">
        <Link className="text-white text-decoration-none px-2" to="/admin">
          Admin Page
        </Link>
      </Button>
    </Container>
  );
};

export default App;
