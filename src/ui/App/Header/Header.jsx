import React from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { Head, Shadow, Content, Logo, Nav, SearchButton } from './styles'
import SearchWidget from '../../SearchBar/SearchBar'

const Header = () => {
	const [isSearchOpen, serSearchOpen] = React.useState(false)

	return (
		<Head>
			<nav>
				<Shadow>
					<Content>
						<Logo>React Blog</Logo>
						<Nav>
							<ul>
								<li>
									<NavLink
										to="/"
										className="link"
										exact
										activeClassName="selectedLink">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className="link"
										activeClassName="selectedLink">
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/profile"
										className="link"
										activeClassName="selectedLink">
										Profile
									</NavLink>
								</li>
							</ul>
							<SearchButton
								type="button"
								className={cn('navbar-toggle-search', {
									searchOpen: isSearchOpen,
								})}
								onClick={() => serSearchOpen(!isSearchOpen)}>
								<FaSearch />
							</SearchButton>
						</Nav>
					</Content>
				</Shadow>
				<SearchWidget isSearchOpen={isSearchOpen} />
			</nav>
		</Head>
	)
}
export default Header
