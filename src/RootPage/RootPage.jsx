import "./RootPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import { TopNavbar } from "./TopNavbar";
import { CreateForm } from "../CreateForm/CreateForm";
import { SavedForm } from "../SavedForm/SavedForm";
import { Submissions } from "../Submissions/Submissions";

export const RootPage = () => {
  return (
    <React.Fragment>
      <Router>
        <TopNavbar />
        <br />
        <br />
        <br />
        <Switch>
          <Route exact path="/">
            <h5 className="ml-5">Welcome to Deadshot's form builder</h5>
            <h6 className="ml-5">
              Please navigate to your desired page from the top navigation bar
            </h6>
          </Route>
          <Route path="/createForm">
            <CreateForm />
          </Route>
          <Route path="/savedForm">
            <SavedForm />
          </Route>
          <Route path="/submissions">
            <Submissions />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
