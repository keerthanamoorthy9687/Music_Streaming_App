import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../redux/actions/authActions";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Auth = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login({ email: form.email, password: form.password }));
    } else {
      dispatch(register(form));
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        {!isLogin && (
          <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </Form.Group>
        )}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </Form>
      <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="mt-2">
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </Button>
    </Container>
  );
};

export default Auth;
