import styled from 'styled-components'

export const Head = styled.div`
	background-color: #fff;
	display: block;
	z-index: 999;
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
	padding: 20px 80px;
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
			/* a {

			} */
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
