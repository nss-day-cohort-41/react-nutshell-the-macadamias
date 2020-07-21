import {Route} from 'react-router-dom';
import React from 'react';
import Login from "../Login/Login";
import EventList from '../../components/events/EventList';
import EventForm from "../../components/events/EventForm";
import TaskList from "../../components/tasks/TaskList"
import TaskForm from "../../components/tasks/TaskForm";
import Friend from "../../components/Friends/Friend";



const ApplicationViews = () =>{
    return (
        <>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={TaskList}/>
        <Route exact path="/events" render={(props) => {
          return <EventList {...props} />;}} />
        <Route exact path="/tasks" component={TaskList}></Route>
        <Route exact path="/events/new" component={EventForm}/>
        <Route exact path="/tasks/new" component={TaskForm}/>
        <Route exact path="/friends" component={Friend}/>
        {/* <Route exact path="/articles" component={}></Route>
        <Route exact path="/news" component={}></Route>
        <Route exact path="/comments" component={}></Route> 
         <Route exact path="/" component={Login}/> */} 
        </>
    )
}
export default ApplicationViews;