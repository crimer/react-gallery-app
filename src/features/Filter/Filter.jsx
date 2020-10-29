import React from 'react'
import styled from 'styled-components'

const FilterStyle = styled.span`
	color: red;
`

export const Filter = ({ item }) => {
	return <FilterStyle>{item.name}</FilterStyle>
}
