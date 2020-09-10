import styled from 'styled-components'

export const Head = styled.div`
	grid-area: header;
	display: block;
	nav {
		background-color: #fff;
	}
`

export const Shadow = styled.div`
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`

export const NavbarSearch = styled.div`
	background-color: #fff;
`

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	height: 60px;
	padding: 0 20px;
	@media (min-width: 1380px) {
		.navbar-container {
			max-width: 1380px;
		}
	}
	@media (min-width: 1200px) {
		.navbar-container {
			max-width: 1200px;
		}
	}
	@media (min-width: 1020px) {
		.navbar-container {
			max-width: 1020px;
		}
	}
	@media (min-width: 720px) {
		.navbar-container {
			max-width: 720px;
		}
	}
`
export const Logo = styled.div`
	display: flex;
	align-items: center;
	padding: 0;
	margin: 0;
	font-size: 20px;
`
export const Nav = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	ul {
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		height: 100%;
		li {
			height: 100%;
			a {
				display: flex;
				height: 100%;
				align-items: center;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				text-decoration: none;
				color: black;
				font-size: 0.938rem;
				font-weight: 500;
				text-transform: none;
				transition: 0.2s color ease;
				&:hover {
					color: #4842b7;
				}
				&.selectedLink {
					color: #4842b7;
				}
			}
		}
		li:not(:last-child) {
			margin-right: 20px;
		}
	}
`

export const SearchButton = styled.button`
	margin-left: 1rem;
	background: transparent;
	color: #000000;
	font-size: 1.25rem;
	width: 2rem;
	height: 2rem;
	outline: none;
	cursor: pointer;
	padding: 0;
	border-radius: 100%;
	transition: 0.2s color ease;
	border: none;
	&.searchOpen {
		background-color: #4842b7;
		color: white;
	}
	&:hover {
		color: rgb(132, 132, 132);
	}
`
