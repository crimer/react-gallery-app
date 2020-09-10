import React from 'react'
import classNames from 'classnames'
import { Search } from './styles'

const SearchBar = ({ isSearchOpen }) => {
	return (
		<>
			<Search open={isSearchOpen}>
					<form>
						<input type="text" placeholder="Search" />
						<button>Search</button>
					</form>
			</Search>
		</>
	)
}
export default SearchBar
