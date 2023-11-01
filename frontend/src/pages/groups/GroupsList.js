import React, { useEffect, useState } from "react";

import styles from "../../styles/TasksList.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Button, Table } from "react-bootstrap";
import GroupTaskTitle from "./GroupTaskTitle";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GroupsList({ message }) {
  const [groups, setGroups] = useState({ results: [] });
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const [{data: groups}] = await Promise.all([
                axiosReq.get(`/groups`)
            ])
            setGroups({results: [groups]})
            console.log(groups)
        } catch (err) {
            console.log(err)
        }
    }
    
    handleMount()
  }, [pathname])
  
  
    if (groups.results.length) {
      return (
        <>
          <Table className={`${styles.table}`} responsive striped>
            <thead>
              <tr>
                <th>Task Title</th>
                <th>Groups Size</th>
                <th>View Group</th>
                <th>Edit Group</th>
                <th>Delete Group</th>
              </tr>
            </thead>
            <tbody>
              {groups.results.map((groupList) => (
                groupList.map((group) => (
                  <>
                    <tr key={group.id}>
                      <td><GroupTaskTitle id={+group.task} /></td>
                      <td>{group.group_size}</td>
                      <td>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          href={`/groups/${group.id}`}
                        >
                          View
                        </Button>
                      </td>
                      <td>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          href={`/groups/${group.id}/edit`}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          className={`${btnStyles.Button}`}
                          variant="primary"
                          onClick={ async () => {
                            try {
                                await axiosRes.delete(`/groups/${group.id}/`);
                                history.push(`/deleted/groups/`);
                            } catch (err) {
                                console.log(err)
                            }
                            }
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

export default GroupsList;