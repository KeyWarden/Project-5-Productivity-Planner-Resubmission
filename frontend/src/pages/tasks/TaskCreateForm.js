import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


import styles from "../../styles/TaskGroupCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";

function TaskCreateForm() {
    const [taskCreateData, setTaskCreateData] = useState({
      title: ''
    });

    const { title } = taskCreateData;

    const history = useHistory()

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
        setTaskCreateData({
            ...taskCreateData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', title)

        try {
            const {data} = await axiosReq.post('/tasks/', formData);
            history.push(`/tasks/${data.id}`)
        } catch (err) {
            setErrors(err.response?.data)
        }
    }

  const textFields = (
    <div className={`${styles.Container}`}>
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
                className={styles.Input}
                type="text"
                name="title"
                placeholder="Enter Title Here"
                value={title}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>{message}</Alert>
        ))}
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
        <div>
          <Container>{textFields}</Container>
        </div>
    </Form>
  );
}

export default TaskCreateForm;