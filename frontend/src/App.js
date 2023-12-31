import React from 'react';
import './App.css';
import Tasks from './Tasks';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route,Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import TaskCreateForm from './pages/tasks/TaskCreateForm';
import TaskPage from './pages/tasks/TaskPage';
import Groups from './Groups';
import GroupPage from './pages/groups/GroupPage';
import TaskEditForm from './pages/tasks/TaskEditForm';
import GroupCreateForm from './pages/groups/GroupCreateForm';
import GroupEditForm from './pages/groups/GroupEditForm';
import Home from './Home';
import Deleted from './components/Deleted';



function App() {
  
  return (
    <div className="App">
      <header className='App-header'>
        <p>Pro<span className='Title2'>Plan</span><span className='Title3'>X</span></p>
        <NavBar />
      </header>
      <Container>
        <div className='App-content'>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/tasks" render={() => <Tasks />} />
            <Route exact path="/tasks/:id" render={() => <TaskPage />} />
            <Route exact path="/groups/:id" render={() => <GroupPage />} />
            <Route exact path="/createtask" render={() => <TaskCreateForm />} />
            <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
            <Route exact path="/groups" render={() => <Groups />} />
            <Route exact path="/deleted/tasks" render={() => <Deleted tasksOrGroups="tasks" />} />
            <Route exact path="/deleted/groups" render={() => <Deleted tasksOrGroups="groups" />} />
            <Route exact path="/creategroup" render={() => <GroupCreateForm />} />
            <Route exact path="/groups/:id/edit" render={() => <GroupEditForm />} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route render={() => <p>Page not Found!</p>} />
          </Switch>
        </div>
      </Container>
      <div className='App-footer-box'>
      </div>
      <footer className='App-footer'>
        <h3>Contact Details</h3>
        <p>Phone Number: 01234 56789</p>
        <p>Email: admin@proplanx.corp</p>
      </footer>
    </div>
  );
}

export default App;