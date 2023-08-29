import './Tasks.css';

function Tasks() {
    return (
        <div>
            <table class="my-auto mx-auto p-2 bg-info col-md-12 table-responsive-md">
                <tr class="table table-striped table-borderless">
                    <td>Title</td>
                    <td>Due Date</td>
                    <td>View Task</td>
                    <td>Edit Task</td>
                    <td>Delete Task</td>
                </tr>
            </table>
        </div>
    )
}

export default Tasks
