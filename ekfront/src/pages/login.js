import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Appheader from "../components/header/header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <Appheader />
      <Container>
        <Form onSubmit={handleSubmit} className="login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: "1rem" }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
