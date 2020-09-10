import React from 'react'
import CategoryWidget from '../../Widgets/CategoryWidget'
import RecentPostsWidget from '../../Widgets/RecentPostsWidget'
import { SideBar } from './styles'

const Sidebar = () => {
	return (
		<SideBar>
			<CategoryWidget />
			<RecentPostsWidget />
		</SideBar>
	)
}

export default Sidebar
