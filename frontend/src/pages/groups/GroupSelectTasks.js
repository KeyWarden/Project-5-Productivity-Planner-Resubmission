import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';

function GroupSelectTasks({ message }) {
  const [tasks, setTasks] = useState({ results: [] });
  const { pathname } = useLocation();

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

  if (tasks.results.length) {

    return (
      <>
        {tasks.results.map((taskList) => (
          taskList.map((singleTask) => (
            <>
              <option value={singleTask.id}>{singleTask.title}</option>
            </>
          ))
        ))
        }
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

export default GroupSelectTasks