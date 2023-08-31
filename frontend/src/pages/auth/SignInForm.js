import React, {useState, useContext} from "react";
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
import { SetCurrentUserContext } from "../../App";

const SignInForm = () => {

    const setCurrentUser = useContext(SetCurrentUserContext);

    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
            setSignInData({
            ...signInData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const {data} = await axios.post('/dj-rest-auth/login/', signInData);
        setCurrentUser(data.user);
        history.push("/");
        } catch(err) {
            setErrors(err.response?.data)
        }
    };

    return (
        <div>
            <Container className={`${styles.Content}`}>
                <h1 className={styles.Header}>sign in</h1>

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
                    <Form.Group controlId="password">
                        <Form.Label className="d-none">password</Form.Label>
                        <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    {errors.password?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>{message}</Alert>
                    ))}
                    <Button className={`${btnStyles.Button}`} variant="primary" type="submit">
                        Sign In
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>{message}</Alert>
                    ))}
                </Form>

            </Container>
            <Container className={`mt-3 ${styles.Content}`}>
            <Link className={styles.Link} to="/signup">
                Don't have an account yet? <span>Sign up here!</span>
            </Link>
            </Container>
        <Col
            className={`my-auto d-none d-md-block p-2`}
        >
        </Col>
        </div>
    );
};

export default SignInForm;