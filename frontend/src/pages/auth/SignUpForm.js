import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import {
  Form,
  Button,
  Col,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
    password2: ''
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push("/signin");
    } catch(err) {
      setErrors(err.response?.data)
    }
  };

  return (
    <div>
        <Container className={`${styles.Content}`}>
            <h1 className={styles.Header}>sign up</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">username</Form.Label>
                    <Form.Control 
                      className={styles.Input} 
                      type="text" 
                      placeholder="Username" 
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>{message}</Alert>
                ))}
                <Form.Group controlId="password1">
                    <Form.Label className="d-none">password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Password"
                      name="password1"
                      value={password1}
                      onChange={handleChange}
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>{message}</Alert>
                ))}
                <Form.Group controlId="password2">
                    <Form.Label className="d-none">confirm password</Form.Label>
                    <Form.Control
                      className={styles.Input}
                      type="password"
                      placeholder="Confirm Password"
                      name="password2"
                      value={password2}
                      onChange={handleChange}
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>{message}</Alert>
                ))}
                <Button className={`${btnStyles.Button}`} variant="primary" type="submit">
                    Sign Up
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>{message}</Alert>
                ))}
            </Form>

        </Container>
        <Container className={`mt-3 ${styles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in here!</span>
          </Link>
        </Container>
      <Col
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
      </Col>
    </div>
  );
};

export default SignUpForm;