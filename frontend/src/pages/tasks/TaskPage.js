import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [] })

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: task}] = await Promise.all([
                axiosReq.get(`/tasks/${id}`)
            ])
            setTask({results: [task]})
        } catch (err) {
            console.log(err)
        }
    }

    handleMount()
  }, [id])

  return (
    <div>
      <Task {...task.results[0]} />
    </div>
  );
}

export default TaskPage;