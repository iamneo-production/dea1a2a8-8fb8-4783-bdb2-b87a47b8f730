import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import SignUp from './SignUp';
import FetchApi from './FetchApi';
import Signin from './Signin';
import Course from './Course';
import CourseAdd from './CourseAdd';
import CourseDel from './CourseDel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Abacus Academy Admission Portal</NavLink>
            
            
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Signin} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/fetchapi" component={FetchApi}/>
              <Route path="/Signin" component={Signin}/>
              <Route path="/admindashboard" component={AdminDashboard}/> 
              <Route path="/course" component={Course}/>     
              <Route path="/courseadd" component={CourseAdd}/>
              <Route path="/coursedelete" component={CourseDel}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
