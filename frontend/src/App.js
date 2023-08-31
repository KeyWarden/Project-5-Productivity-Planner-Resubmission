// import Button from 'react-bootstrap/Button';
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
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route exact path="/tasks" render={() => <Tasks />} />
            <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
            <Route exact path="/groups" render={() => <h1>Groups</h1>} />
            <Route exact path="/signin" render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route render={() => <p>Page not Found!</p>} />
          </Switch>
        </div>
      </Container>
      <footer className='App-footer'>
        <h3>Contact Details</h3>
        <p>Phone Number: 01234 56789</p>
        <p>Email: admin@proplanx.corp</p>
      </footer>
    </div>
  );
}

export default App;