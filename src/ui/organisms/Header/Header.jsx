import React from 'react'
import cn from 'classnames'
import { Link } from '../../index'
import { Head, Shadow, Content, Logo, Nav, SearchButton } from './styles'
import { AiFillCamera, AiOutlineSearch } from 'react-icons/ai'

export const Header = () => {
	const [isSearchOpen, serSearchOpen] = React.useState(false)

	return (
		<Head>
			<Shadow>
				<Content>
					<Logo>
						<AiFillCamera />
						React Gallery
					</Logo>
					<Nav>
						<ul>
							<li>
								<Link
									to="/"
									className="link"
									exact
									activeClassName="selectedLink">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="link"
									activeClassName="selectedLink">
									Albums
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="link"
									activeClassName="selectedLink">
									About
								</Link>
							</li>
							<li>
								<Link
									to="/profile"
									className="link"
									activeClassName="selectedLink">
									Profile
								</Link>
							</li>
							<li>
								<Link
									to="/profile"
									className="link"
									activeClassName="selectedLink">
									Contact
								</Link>
							</li>
						</ul>
						<SearchButton
							type="button"
							className={cn('navbar-toggle-search', {
								searchOpen: isSearchOpen,
							})}
							onClick={() => serSearchOpen(!isSearchOpen)}>
							<AiOutlineSearch />
						</SearchButton>
					</Nav>
				</Content>
			</Shadow>
		</Head>
	)
}
