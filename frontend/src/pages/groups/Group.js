import React from 'react'
import styles from '../../styles/Group.module.css'
import btnStyles from "../../styles/Button.module.css";
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import GroupTaskTitle from './GroupTaskTitle';
import { axiosRes } from '../../api/axiosDefaults';

const Task = (props) => {
    const {
        id,
        owner,
        created_at,
        updated_at,
        task,
        group_size,
        description,
    } = props

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner
    const taskID = +task
    const history = useHistory();
    
    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/groups/${id}/`);
            history.push(`/groups/`);
        } catch (err) {
            console.log(err)
        }
    }

    if (is_owner) { 
        return (
            <Card className={styles.Group}>
                <Card.Body>
                    {task && <Card.Title className={styles.Title}>Group for Task: <GroupTaskTitle id={taskID} /></Card.Title>}
                </Card.Body>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <p>Group Size: <span>{group_size}</span></p>
                    </div>
                    <div className='d-flex align-items-left'>
                        <p>Description:</p>
                    </div>
                    {description && <Card.Text className={styles.Description}>{description}</Card.Text>}
                    <Button
                        className={`${btnStyles.Button}`}
                        href={`/groups/${id}/edit`}
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
                <div>
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