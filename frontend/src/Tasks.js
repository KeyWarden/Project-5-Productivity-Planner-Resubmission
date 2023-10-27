import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Tasks.css';
import TasksList from './pages/tasks/TasksList';

function Tasks() {
    return (
        <div>
            <TasksList />
            <Button className={`${btnStyles.Button}`} variant="primary" href="/tasks/create">Add Task</Button>
        </div>
    )
}

export default Tasks
