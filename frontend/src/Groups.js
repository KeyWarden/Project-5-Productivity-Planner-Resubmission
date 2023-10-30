import { Button } from 'react-bootstrap';
import btnStyles from "./styles/Button.module.css";
import './Groups.css';
import GroupsList from './pages/groups/GroupsList';

function Groups() {
    return (
        <div>
            <GroupsList />
            <Button className={`${btnStyles.Button}`} variant="primary" href="/groups/create">Add Group</Button>
        </div>
    )
}

export default Groups
