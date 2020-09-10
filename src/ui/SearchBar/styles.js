import styled from 'styled-components'

export const Search = styled.div`
	height: ${props => (props.open ? '100px' : '0px')};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s height ease;
	overflow: hidden;
	form {
		display: flex;
	}
	input {
		display: block;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		width: 400px;
		line-height: 1.5;
		color: #495057;
		background-color: #fff;
		border: 1px solid #ced4da;
		border-radius: 0.25rem;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		&:focus {
			color: #495057;
			background-color: #fff;
			border-color: #80bdff;
			outline: 0;
			box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
		}
	}
	button {
		border: none;
		cursor: pointer;
		background-color: #6864bf;
		margin-left: 10px;
		color: white;
		border-radius: 5px;
		height: 36px;
		line-height: 36px;
		padding: 0 16px;
		text-transform: uppercase;
		transition: 0.2s background ease;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		&:hover {
			background: lighten($color: #6864bf, $amount: 10);
		}
	}
`
