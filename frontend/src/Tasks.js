import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Tasks.css';
import TasksPage from './pages/tasks/TasksPage';

function Tasks() {
    return (
        <div>
            <TasksPage />
            <Button className={`${btnStyles.Button}`} variant="primary" href="/tasks/create">Add Task</Button>
        </div>
    )
}

export default Tasks
