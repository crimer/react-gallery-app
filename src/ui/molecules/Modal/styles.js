import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const ModalBg = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	transition: background-color 500ms linear;
	opacity: ${props => (props.show ? 0.7 : 0)};
	background-color: ${props => props.show && 'black'};
	visibility: ${props => (props.show ? 'visible' : 'hidden')};
`
export const Popup = styled.div`
	position: fixed;
	top: 50%;
  left: 50%;
  opacity: 1;
	padding: 30px;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 0 50px rgba(black, 0.5);
	transition: transform 500ms ease;
	transform: ${props => (props.show ? 'scale(1)' : 'scale(0)')} translate(-50%, -50%);
	z-index: 111;

	header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eee;
		h2 {
			margin: 0 0 10px;
			padding: 0;
			font-size: 28px;
		}
	}
	article {
		position: relative;
		display: block;
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 1.75;

		p {
			margin-bottom: 30px;
		}
	}
	footer {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		margin: 0;
		padding: 10px;
	}
`
export const Button = styled.button`
	padding: 10px 30px;
	border-radius: 3px;
	font-size: 14px;
	font-weight: 400;
  color: white;
  border: none;
  cursor: pointer;
	text-transform: uppercase;
  background-color: ${props => props.succes && '#2ecc71'};
  background-color: ${props => props.danger && '#e74c3c'};
`
export const CloseIcon = styled(FaTimes)`
	font-size: 18px;
	&:hover {
    transform: scale(1.15);
    cursor: pointer;
	}
`
