import React from 'react'
import CategoryWidget from '../../molecules/Widgets/CategoryWidget'
import RecentPostsWidget from '../../molecules/Widgets/RecentPostsWidget'
import { SideBar } from './styles'

export const Sidebar = () => {
	return (
		<SideBar>
			<CategoryWidget />
			<RecentPostsWidget />
		</SideBar>
	)
}

