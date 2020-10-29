import React from 'react'
import styled from 'styled-components'

export const PageTemplate = ({ header, hero, children, footer }) => {
	return (
		<TemplateWrapper>
			<Header>{header}</Header>
			{hero && <Hero>{hero}</Hero>}
			{children}
			<Footer>{footer}</Footer>
		</TemplateWrapper>
	)
}

const TemplateWrapper = styled.section`
	display: grid;
	min-height: 100vh;
	max-height: 100vh;
	grid-template-rows: auto auto 1fr auto;
	grid-template-areas:
		'header'
		'hero'
		'.'
		'footer';
	flex-grow: 1;
	@media screen and (max-width: 640px) {
		padding-top: 3.25rem;
	}
`
const Header = styled.header`
	grid-area: header;
	z-index: 1;
`

const Hero = styled.section`
	grid-area: hero;
	z-index: 1;
`


const Footer = styled.footer`
	grid-area: footer;
`
