import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "../pages/index";
import { createBrowserHistory } from "history";
import { useContext, useEffect, useState } from "react";
import WriteStory from "../pages/write-story";

const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/write-story" component={WriteStory} exact={true} />
        <Route path="/stroy/:storyID" component={WriteStory} exact={true} />
        <Route path="/" component={HomePage} exact={true} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
