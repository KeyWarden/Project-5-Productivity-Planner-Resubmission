import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <div>
        <Container className={`${styles.Content}`}>
            <h1 className={styles.Header}>sign up</h1>

            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">username</Form.Label>
                    <Form.Control className={styles.Input} type="email" placeholder="Username" name="username" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className="d-none">password</Form.Label>
                    <Form.Control className={styles.Input} type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Form.Group controlId="passwordConfirm">
                    <Form.Label className="d-none">confirm password</Form.Label>
                    <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="passwordConfirm" />
                </Form.Group>
                <Button className={`${btnStyles.Button}`} variant="primary" type="submit">
                    Sign Up
                </Button>
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