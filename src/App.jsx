import React from 'react'
import { AboutPage } from './pages/AboutPage'
import { PostsPage } from './pages/PostsPage'
import { ProfilePage } from './pages/ProfilePage'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './global/styles/global'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Switch>
				<Route path="/" exact component={PostsPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/profile" exact component={ProfilePage} />
			</Switch>
		</>
	)
}

export default App
