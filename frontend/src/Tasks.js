import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Tasks.css';
import TasksList from './pages/tasks/TasksList';

function Tasks() {

    return (
        <div>
            <TasksList 
                message="No Tasks Found"
            />
            <Button className={`${btnStyles.Button}`} variant="primary" href="/createtask">Add Task</Button>
        </div>
    )
}

export default Tasks
