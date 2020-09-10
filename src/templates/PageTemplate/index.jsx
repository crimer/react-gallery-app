import React from 'react'
import styled from 'styled-components'

const TemplateWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 3.75rem;
	min-height: 100vh;
	box-sizing: border-box;
	@media screen and (max-width: 640px) {
		padding-top: 3.25rem;
	}
`

const Header = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

const Hero = styled.section``


const Content = styled.section`
	width: 100%;
	box-sizing: border-box;
	margin: 2rem auto;
	max-width: 1100px;
`

const Footer = styled.footer`
	margin-top: auto;
`

export const PageTemplate = ({
	header,
	hero,
	sponsor,
	children,
  footer,
  sidebar,
	...props
}) => {
	return (
		<TemplateWrapper {...props}>
			<Header>{header}</Header>
			{hero && <Hero>{hero}</Hero>}
			<Content>{children}</Content>
      {sidebar && <Sidebar>{sidebar}</Sidebar>}
			<Footer>{footer}</Footer>
		</TemplateWrapper>
	)
}
