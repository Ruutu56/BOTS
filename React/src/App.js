import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import Challenger from './components/pages/Challenger';
import SignUp from './components/pages/SignUp';
import TeammateFinder from './components/pages/TeammateFinder';
import GroundBooking from './components/pages/GroundBooking';
import ViewPlayerFinder from './components/pages/ViewPlayerFinder';
import SuccessfullyChallengeAccepted from './components/pages/SuccessfullyChallengeAccepted';
import SuccessConnect from './components/pages/SuccessConnect';
import Payment from './components/pages/Payment';
import Successful from './components/pages/Successful';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />   
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/home' exact component={Home} />
          <Route path='/challenger' component={Challenger}/>
          <Route path='/teamfinder' component={TeammateFinder}/>
          <Route path='/groundbooking' component={GroundBooking}/>
          <Route path='/payment' component={Payment}/>
          <Route path='/view-playerFinder/:id' component={ViewPlayerFinder}/>
          <Route path='/successful' component={Successful}/>
          <Route path='/challenge-accepted' component={SuccessfullyChallengeAccepted}/>
          <Route path='/connect' component={SuccessConnect}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
      
                  {/* <div>
                   <nav>
                       <Link to="/login">LOGIN</Link>
                   </nav>
                </div>
        </div><Route path="/login" Component={logform}/>*/}