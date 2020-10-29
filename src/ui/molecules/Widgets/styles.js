import styled from 'styled-components'

export const Widget = styled.div`
	margin-top: 30px;
	> ul {
		padding: 0;
		margin: 0 0 0 20px;
		width: 80%;
	}
`
export const GreyTitle = styled.h5`
	font-size: 0.75rem;
	margin: 0 0 20px 0;
	font-weight: 500;
	letter-spacing: 0.125em;
	text-transform: uppercase;
	color: #a2b0bf;
`
export const CategoryItem = styled.div`
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgb(216, 216, 216);
	a {
		color: ${props => props.current && '#4842b7'};
	}
`

export const WidgetCategory = styled(Widget)``
export const WidgetRecentPosts = styled(Widget)`
	li {
		margin-bottom: 15px;
	}
`
