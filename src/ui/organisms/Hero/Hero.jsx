import React from 'react'
import { HeroText } from '../../atoms/HeroText'
import {CenterContainer} from '../../templates/Containers';
export const Hero = () => {
	return (
		<CenterContainer width="900">
			<HeroText>
				Hello! Welcome to React photo gallery With Creative Style
			</HeroText>
		</CenterContainer>
	)
}
