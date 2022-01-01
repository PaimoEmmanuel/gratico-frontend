import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import HomePage from '../pages/index'
import { createBrowserHistory } from 'history'
import WriteStory from '../pages/write-story'
import EditStory from '../pages/edit-story'
import ScrollToTop from '../components/molecules/scroll'
import Explore from '../pages/explore'

const history = createBrowserHistory()

const AppRouter = () => {
	return (
		<Router history={history}>
			<>
				<ScrollToTop />
				<Switch>
					<Route path='/' component={HomePage} exact={true} />
					<Route path='/explore' component={withRouter(Explore)} exact={true} />
					<Route path='/write-story' component={withRouter(WriteStory)} exact={true} />
					<Route path='/stroy/:storyID' component={WriteStory} exact={true} />
					<Route path='/edit-story' component={withRouter(EditStory)} exact={true} />
					<Redirect to='/not-found' />
				</Switch>
			</>
		</Router>
	)
}

export default AppRouter
