import React from 'react'
import Footer from '../components/organisms/footer'
import HomeExplore from '../components/organisms/home-explore'
import HomeHeading from '../components/organisms/home-heading'
import LandingView from '../components/organisms/landing-view'
import DesktopScreen from '../components/organisms/desktop-screen'

const Index: React.FC<{}> = () => (
	<>
		<LandingView />
		<DesktopScreen />
		<HomeHeading />
		<HomeExplore />
		<Footer />
	</>
)

export default Index
