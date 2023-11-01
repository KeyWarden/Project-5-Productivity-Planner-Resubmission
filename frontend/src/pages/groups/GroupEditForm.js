import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


import styles from "../../styles/TaskGroupCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GroupSelectTasks from "./GroupSelectTasks";

function GroupEditForm() {
    const [groupCreateData, setGroupCreateData] = useState({
      task: '',
      group_size: '',
      description: '',
    });

    const { task, group_size, description } = groupCreateData;

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/groups/${id}/`);
                const {task, group_size, description, is_owner} = data;

                is_owner ? setGroupCreateData({task, group_size, description}) : history.push('/')
            } catch (err) {
                console.log(err);
            }
        }

        handleMount();
    }, [history, id])

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
        setGroupCreateData({
            ...groupCreateData,
            [event.target.name]: event.target.value
        })
    };

  const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();

      formData.append('task', task);
      formData.append('group_size', group_size);
      formData.append('description', description);

      try {
          await axiosReq.put(`/groups/${id}/`, formData);
          history.push(`/groups/`)
      } catch (err) {
          setErrors(err.response?.data)
      }
      };
  

  const textFields = (
    <div className={`${styles.Container}`}>
        <Form.Group>
            <Form.Label>Task*</Form.Label>
            <Form.Control
              required
              className={styles.Input}
              as="select"
              name="task"
              value={task}
              onChange={handleChange}
            >
              <GroupSelectTasks
                message="You have no Tasks, and therefore cannot make any Groups"
              />
            </Form.Control>
            <Form.Label>Group Size*</Form.Label>
            <Form.Control
                required
                className={styles.Input}
                type="number"
                name="group_size"
                placeholder="Enter Group Size Here [Numbers Only]"
                value={group_size}
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
        href={`/groups/`}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        save
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
};

export default GroupEditForm;