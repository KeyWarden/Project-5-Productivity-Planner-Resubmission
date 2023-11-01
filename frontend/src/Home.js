import React from 'react'
import { useCurrentUser } from './contexts/CurrentUserContext'
import './Home.css'

const Home = () => {
    const currentUser = useCurrentUser();

    const loggedInPage = (
        <>
            <div className='textBox'>
                <p>Welcome to the ProPlanX Productivity Planner! Here you can find all you need to ensure you keep track of the various <a href='/tasks/'>Tasks</a> you wish to accomplish, as well as any <a href='/groups/'>Groups</a> you have assigned those tasks.</p>
                <p>If you wish to get started, please select either <a href='/tasks/'>Tasks</a> or <a href='/groups/'>Groups</a> from the Navbar, or click on the words here on the Home page!</p>
            </div>
        </>
    )

    const loggedOutPage = (
        <>
            <div className='textBox'>
                <p>Welcome to the ProPlanX Productivity Planner! Where you can keep track of tasks and work groups alike!</p>
                <p>As you are not currently signed in, please either <a href='/signin'>Sign In Here</a>, or if you do not have an account, please <a href='/signup'>Sign Up Here</a>.</p>
            </div>
        </>
    )
  return (
    <div>
        {currentUser ? loggedInPage : loggedOutPage}
    </div>
  )
}

export default Home