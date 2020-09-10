import styled from 'styled-components'

export const Foot = styled.div`
	grid-area: footer;
	background-color: #fff;
	padding: 40px;
	> p {
		margin: 0;
		font-size: 22px;
	}
`
export const Copyright = styled.div`
	p {
		margin: 20px 0 0 0;
	}
	a {
		margin-left: 10px;
		text-decoration: none;
		color: black;
		transition: 0.2s color ease;
		&:hover {
			color: #4842b7;
		}
	}
`
