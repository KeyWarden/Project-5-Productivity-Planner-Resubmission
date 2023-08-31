import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Groups.css';
import GroupsPage from './pages/groups/GroupsPage';

function Groups() {
    return (
        <div>
            <GroupsPage />
            <Button className={`${btnStyles.Button}`} variant="primary" href="/groups/create">Add Group</Button>
        </div>
    )
}

export default Groups
