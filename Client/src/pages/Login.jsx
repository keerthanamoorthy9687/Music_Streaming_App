import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8030/api/users/login", { email, password });
      setMessage(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/home")
    } catch (err) {
      setMessage(err.response.data.error);
    }


    // // Dummy authentication logic
    // if (email === "user@example.com" && password === "password") {
    //   navigate("/home"); // Redirect to home after login
    // } else {
    //   setError("Invalid email or password!");
    // }
  };

  return (
   
   
    <Container className="d-flex justify-content-center align-items-center vh-100  ">
      <Card style={{ width: "350px", padding: "20px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={(e)=>handleLogin(e)}>
            {/* Email Field */}
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Login Button */}
            <Button variant="primary" type="submit" className="w-100 mt-3 ">
              Login
            </Button>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center mt-3">
            <small>
              Don't have an account? <a href="/signup">Sign Up</a>
            </small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  
  );
};

export default Login;
