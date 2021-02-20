import React, { useEffect } from "react";
import {Route, Switch} from 'react-router-dom';
import PostJob from "./PostJob"
import AppliedJobs from "./AppliedJobs"
import Dashboard from "./Dashboard";
import Home from "./Home";
import LogInSignUP from "./LogInSignUP";

  const Content = () => (
  <div className="content">
    <div className='content-inner'>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/post-job" component={PostJob} />
        <Route exact path="/applied-job" component={AppliedJobs} />
        <Route exact path="/login" component={LogInSignUP} />
      </Switch>
    </div>
  </div>
);

export default Content;
