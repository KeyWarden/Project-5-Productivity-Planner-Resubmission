import React from 'react'
import styles from '../../styles/Task.module.css'
import btnStyles from "../../styles/Button.module.css";
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosRes } from '../../api/axiosDefaults';

const Task = (props) => {
    const {
        id,
        owner,
        is_owner,
        created_at,
        updated_at,
        title,
        due_at,
        description,
    } = props

    const history = useHistory();

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/tasks/${id}/`)
            history.push(`/tasks/`)
        } catch (err) {
            console.log(err)
        }
    }

    if (is_owner) { 
        return (
            <Card className={styles.Task}>
                <Card.Body>
                    {title && <Card.Title className={styles.Title}>{title}</Card.Title>}
                </Card.Body>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <p>Due Date: <span>{due_at || 'N/A'}</span></p>
                    </div>
                    <div className='d-flex align-items-left'>
                        <p>Description:</p>
                    </div>
                    {description && <Card.Text className={styles.Description}>{description}</Card.Text>}
                    <Button
                        className={`${btnStyles.Button}`}
                          href={`/tasks/${id}/edit`}
                    >
                        Edit
                    </Button>
                    <Button
                        className={`${btnStyles.Button}`}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <Container className={styles.NotUser}>
                <div className='d-flex align-items-center'>
                    <p>You are not the User for this Task, and therefore we cannot show it to you.</p>
                </div>
                <div>
                    <Link className={styles.Link} to="/tasks">
                        Please return to your Tasks page, or select any option from the navbar.
                    </Link>
                </div>
            </Container>
        )
    }
}

export default Task