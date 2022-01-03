import { Router, Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "../pages/index";
import { createBrowserHistory } from "history";
import WriteStory from "../pages/write-story";
import ScrollToTop from "../components/molecules/scroll";
import EditForm from "../pages/edit-form";
import Explore from "../pages/explore";
import Preview from "../pages/preview";
import ViewStory from "../pages/view-story";
import EditStory from "../pages/edit-story";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/explore" component={withRouter(Explore)} exact={true} />
          <Route
            path="/write"
            component={withRouter(WriteStory)}
            exact={true}
          />
          <Route path="/story/:storyID" component={ViewStory} exact={true} />
          <Route path="/edit" component={withRouter(EditForm)} exact={true} />
          <Route
            path="/edit/:editToken"
            component={withRouter(EditStory)}
            exact={true}
          />
          <Route path="/preview" component={Preview} exact={true} />
          <Redirect to="/not-found" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
