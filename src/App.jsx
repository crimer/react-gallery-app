import React from 'react'
import { AboutPage, HomePage, ProfilePage, UploadImagePage } from './pages'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './global/styles/global'

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/upload" component={UploadImagePage} />
				<Route path="/profile" exact component={ProfilePage} />
			</Switch>
		</>
	)
}

export default App
