// import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import './App.css';
import Tasks from './Tasks';

function App() {
  // const [isUser, changeStatus] = useState()
  // const [error, setError] = useState(null)
  return (
    <div className="App">
      <header className='App-header'>
        <p>Pro<span className='Title2'>Plan</span><span className='Title3'>X</span></p>
        <nav>
          plan is, this will link to Profile, log-out, Tasks, and Groups, but only if you are logged in.
        </nav>
      </header>
      <div className='App-content'>
        <p>When not logged in, this will contain an intoduction to the app for new users, as well as the log in</p>
        <p>When logged in, it will default to the Tasks app. Depnding on chosen feature, it will direct to other apps</p>
        <Tasks />
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