import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function TasksPage() {
  const [tasks, setTasks] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const {data} = await axiosReq.get('/tasks')
        setTasks(data)
        // setHasLoaded(true)
      } catch (err) {
        console.log(err)
      }
    }

    setHasLoaded(false)
    // fetchTasks()
  }, [pathname])
  
  return (
    <div>
      <Container className="Container">
        {hasLoaded ? (
          <>
            {tasks.results.length ? (
              <><p>Tasks here</p></>
            ) : (
              <>
                <p>There are no Tasks</p>
              </>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </div>
  );
}

export default TasksPage;