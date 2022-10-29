import React, { FormEvent, useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  Row,
  Toast,
  ToastBody,
  ToastContainer
} from 'react-bootstrap';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [toastVal, setToastVal] = useState<{ variant: string; text: string }>(
    {} as { variant: string; text: string }
  );
  const [isToastShown, setIsToastShown] = useState<boolean>(false);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setToastVal({ text: data.error, variant: 'danger' });
        setIsToastShown(true);
        setTimeout(() => setIsToastShown(false), 3000);
        throw new Error(data.error);
      }

      setToastVal({ variant: 'success', text: 'Logged in successfully' });
      setIsToastShown(true);
      setTimeout(() => setIsToastShown(false), 3000);
      console.log(data.token);
    } catch (err) {
      if (err instanceof Error) console.error(err.message);
      else String(err);
    }
  };

  return (
    <Container fluid>
      <Row className="flex-column-reverse flex-md-row">
        <Col sm={12} md={6} lg={5}>
          <div
            style={{ maxWidth: '567px' }}
            className="min-vh-100 h-100 w-100 text-center d-flex flex-column justify-content-center align-items-center mx-auto py-5 px-3"
          >
            <h2 className="fs-2 mt-auto">Welcome</h2>
            <p>Enter your username and password</p>
            <Form className="w-100 mb-4" onSubmit={handleLoginSubmit}>
              <FormGroup className="mb-2">
                <FormControl
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <Form.Group className="mb-2">
                <Form.Control
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="w-100">
                Login
              </Button>
              <Button className="w-100 text-decoration-none" variant="link">
                Forgot password?
              </Button>
            </Form>

            <div className="mt-auto">
              <div className="d-flex gap-3 justify-content-center">
                <a href="/" className="text-decoration-none">
                  Terms of Use
                </a>
                <a href="/" className="text-decoration-none">
                  Privacy Policy
                </a>
              </div>
              <p className="fs-6 text-gray-600">
                © Punctualiti 2022. All rights reserved
              </p>
            </div>
          </div>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={7}
          style={{ backgroundColor: '#1334B3' }}
          className="text-white"
        >
          <div className="py-5 px-3 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <object className="w-100" data="/login-image.svg" />
            <h1>360° Solution for Asset Management</h1>
            <p className="text-center" style={{ maxWidth: '713px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
      </Row>
      <ToastContainer position="top-start" className="p-4">
        {isToastShown && (
          <Toast className={`bg-${toastVal.variant} bg-opacity-75 text-white`}>
            <ToastBody>{toastVal.text}</ToastBody>
          </Toast>
        )}
      </ToastContainer>
    </Container>
  );
};

export default Login;
