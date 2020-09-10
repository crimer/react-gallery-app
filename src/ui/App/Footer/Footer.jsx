import React from 'react'
import { Copyright, Foot } from './styles'

const Footer = () => {
	return (
		<Foot>
			<p>By the Nikita Crimer with ❤</p>
			<Copyright>
				<p>
					Crimer Forum 2020
					<a
						className="footer-github"
						href="https://github.com/crimer/react-blog-app"
						target="_blank">
						to GitHub
					</a>
				</p>
			</Copyright>
		</Foot>
	)
}

export default Footer
