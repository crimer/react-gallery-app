import React from 'react'
import { WidgetRecentPosts, GreyTitle } from './styles'

const RecentPostsWidget = () => {
	return (
		<>
			<WidgetRecentPosts>
				<GreyTitle>Актуальные посты</GreyTitle>
				<ul>
					<li>
						<a>What is “security as code” and how can it help you?</a>
					</li>
					<li>
						<a>Why you should have a public security policy</a>
					</li>
					<li>
						<a>How to run security testing sessions</a>
					</li>
					<li>
						<a>
							Finding vulnerabilities more efficiently with Sqreen’s Interactive
							Application Security Testing (IAST)
						</a>
					</li>
					<li>
						<a>
							Introducing Sqreen for Go: the first Runtime Application
							Self-Protection (RASP) for Go
						</a>
					</li>
				</ul>
			</WidgetRecentPosts>
		</>
	)
}
export default RecentPostsWidget
