import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useContext, useEffect, useState } from 'react'

import HomePage from '../pages/index'
import WriteStory from '../pages/write-story'
import Explore from '../pages/explore'

const history = createBrowserHistory()
const AppRouter = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/write-story' component={WriteStory} exact={true} />
				<Route path='/explore' component={Explore} exact={true} />
				<Route path='/story/:storyID' component={WriteStory} exact={true} />
				<Route path='/' component={HomePage} exact={true} />
				<Redirect to='/not-found' />
			</Switch>
		</Router>
	)
}

export default AppRouter
