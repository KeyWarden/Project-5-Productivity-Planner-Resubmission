import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Tasks.css';

function Tasks() {
    return (
        <div>
            <h1>Tasks</h1>
            <table class="my-auto mx-auto p-2 bg-info col-md-12 table-responsive-md">
                <tr class="table table-striped table-borderless">
                    <td>Title</td>
                    <td>Due Date</td>
                    <td>View Task</td>
                    <td>Edit Task</td>
                    <td>Delete Task</td>
                </tr>
            </table>
            <Button className={`${btnStyles.Button}`} variant="primary" href="/tasks/create">Add Task</Button>
        </div>
    )
}

export default Tasks
