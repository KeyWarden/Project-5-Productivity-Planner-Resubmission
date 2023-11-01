import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults'
import styles from '../../styles/GroupTaskTitle.module.css'


const GroupTaskTitle = (props) => {
    const [task, setTask] = useState({ results: [] })
    const [taskTitle, setTaskTitle] = useState()
    const {
        id
    } = props

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: task}] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`)
                ])
                setTask({results: [task]})
                setTaskTitle(task.title)
                console.log(taskTitle)
            } catch (err) {
                console.log(err)
            }
        }
    
        handleMount()
      }, [id])

    return (
        <div><a href={`/tasks/${id}`} className={`${styles.Link}`}>{taskTitle}</a></div>
    )
}

export default GroupTaskTitle