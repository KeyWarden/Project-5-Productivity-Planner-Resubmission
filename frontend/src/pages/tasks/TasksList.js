import React, { useEffect, useState } from "react";

import styles from "../../styles/TasksList.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function TasksList({ message }) {
  const [tasks, setTasks] = useState({ results: [] });
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: tasks}] = await Promise.all([
                axiosReq.get(`/tasks`)
            ])
            setTasks({results: [tasks]})
            console.log(tasks)
        } catch (err) {
            console.log(err)
        }
    }
    
    handleMount()
  }, [pathname])
  
  console.log(tasks.results[0])
  
    if (tasks.results.length) {
      return (
        <>
          <Table className={`${styles.table}`} responsive striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>View Task</th>
                <th>Edit Task</th>
                <th>Delete Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks.results.map((taskList) => (
                taskList.map((task) => (
                  <>
                    <tr key={task.id}>
                      <td key={task.id + "a"}>{task.title}</td>
                      <td key={task.id + "b"}>{task.due_at}</td>
                      <td key={task.id + "c"}>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          href={`/tasks/${task.id}`}
                        >
                          View
                        </Button>
                      </td>
                      <td key={task.id + "d"}>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          href={`/tasks/${task.id}/edit`}
                        >
                          Edit
                        </Button>
                      </td>
                      <td key={task.id + "e"}>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          onClick={task.is_owner ? async () => {
                            try {
                                await axiosRes.delete(`/tasks/${task.id}/`);
                                history.push(`/deleted/tasks/`);
                            } catch (err) {
                                console.log(err)
                            }
                            } : (
                              history.push(`/`)
                              )
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </>
                ))
              ))}
            </tbody>
          </Table>
        </>
      )
    } else {
      return (
        <div>
          <p>{message}</p>
        </div>
      )
    }
}

export default TasksList;