import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function GroupsPage() {
  const [groups, setGroups] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const {data} = await axiosReq.get('/groups')
        setGroups(data)
        // setHasLoaded(true)
      } catch (err) {
        console.log(err)
      }
    }

    setHasLoaded(false)
    // fetchGroups()
  }, [pathname])
  
  return (
    <div>
      <Container className="Container">
        {hasLoaded ? (
          <>
            {groups.results.length ? (
              <><p>Groups here</p></>
            ) : (
              <>
                <p>There are no Groups</p>
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

export default GroupsPage;