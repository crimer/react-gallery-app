import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'
import { kGreenColor } from '../../global/styles/global'

export const Link = styled(RouterLink)`
	font-size: 14px;
	font-weight: 600;
	color: #b7b7b7;
	text-transform: uppercase;
	transition: 0.2s color ease;
	position: relative;
	padding: 0 9px;
	z-index: 1;
	/* &:after {
		content: '•';
		position: absolute;
		font-size: 14px;
		color: #b7b7b7;
		right: -16px;
	} */
	&:before {
		content: '';
		position: absolute;
		left: 0;
		z-index: -1;
		bottom: 0;
		height: 5px;
		width: 0%;
		background-color: ${kGreenColor};
		transition: width 0.2s ease;
	}
	&:hover {
		color: black;
		&:before {
			width: 100%;
		}
	}
	&.selectedLink {
		color: black;
		&:before {
			width: 100%;
		}
	}
`
