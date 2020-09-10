import styled from 'styled-components'

export const Posts = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
	grid-auto-flow: row;
	grid-auto-flow: dense;
	@media screen and (max-width: 855px) {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}
`


export const PostStyle = styled.article`
	background: #fff;
	border-radius: 5px;
	font-family: 'adelle-sans', sans-serif;
	font-weight: 100;
	flex: 0 1 48%;
	padding: 20px;

	a {
		color: #4d4dff;
		text-decoration: none;
		transition: 0.25s ease;
		&:hover {
			border-color: #ff4d4d;
			color: #ff4d4d;
		}
	}
`
export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	h3 {
		color: lighten(#333, 40%);
		font-weight: 100;
		font-size: 28px;
		margin: 0;
	}
	img {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		margin-right: 10px;
	}
`
export const Main = styled.section`
	flex-grow: 1;
	h1 {
		margin-bottom: 20px;
		font-size: 20px;
		a {
			color: #333;
			font-weight: 100;
		}
	}
	& > div p {
		color: lighten(#333, 10%);
	}
`

export const Tags = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 20px 0;
	padding-left: 0;
	li {
		&:not(:last-child) {
			margin-right: 0.5rem;
		}
	}
	a {
		border: 1px solid lighten(#333, 40%);
		border-radius: 3px;
		color: lighten(#333, 40%);
		font-size: 0.75rem;
		height: 2rem;
		line-height: 1rem;
		letter-spacing: 1px;
		text-align: center;
		text-transform: uppercase;
		white-space: nowrap;
		width: 5rem;
	}
`

export const Footer = styled.footer`
	padding-bottom: 0.125rem;
	& > div {
		display: flex;
		flex-flow: row wrap-reverse;
		justify-content: space-between;
		align-items: center;
	}
	a {
		color: lighten(#333, 40%);
	}
`
export const Shares = styled.div`
	display: flex;
	flex-direction: row;
	p {
		margin-right: 1rem;
	}
	span {
		position: relative;
		top: -0.5rem;
	}
`

