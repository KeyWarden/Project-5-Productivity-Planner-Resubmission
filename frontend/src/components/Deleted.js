import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Deleted({ tasksOrGroups }) {
    const history = useHistory();
    if (tasksOrGroups === "tasks") {
        history.push('/tasks/')
    } else if (tasksOrGroups === "groups") {
        history.push('/groups/')
    } else {
        history.push('/')
    }
  return (
    <div>
        Deleted
    </div>
  )
}

export default Deleted