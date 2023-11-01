import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


import styles from "../../styles/TaskGroupCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";

function TaskCreateForm() {  
    const [taskCreateData, setTaskCreateData] = useState({
      title: '',
      due_at: '',
      description: '',
    });

    const { title, due_at, description } = taskCreateData;

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

      formData.append('title', title);
      formData.append('due_at', due_at);
      formData.append('description', description);

      try {
          const {data} = await axiosReq.post('/tasks/', formData);
          history.push(`/tasks/`)
      } catch (err) {
          setErrors(err.response?.data)
      }
      }
  

  const textFields = (
    <div className={`${styles.Container}`}>
        <Form.Group>
            <Form.Label>Title*</Form.Label>
            <Form.Control
                required
                className={styles.Input}
                type="text"
                name="title"
                placeholder="Enter Title Here"
                value={title}
                onChange={handleChange}
            />
            <Form.Label>Due Date</Form.Label>
            <Form.Control
                className={styles.Input}
                type="date"
                name="due_at"
                placeholder="Due Date: YYYY-MM-DD"
                value={due_at}
                onChange={handleChange}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
                className={styles.Input}
                as="textarea"
                rows={20}
                name="description"
                placeholder="Enter Description Here"
                value={description}
                onChange={handleChange}
            />
        </Form.Group>
        {errors.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>{message}</Alert>
        ))}
      <Button
        className={`${btnStyles.Button}`}
        href={`/tasks/`}
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