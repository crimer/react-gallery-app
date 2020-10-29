import React from 'react'
import { WidgetCategory, GreyTitle, CategoryItem } from './styles'

const CategoryWidget = () => {
	return (
		<>
			<WidgetCategory>
				<GreyTitle>Категории</GreyTitle>
				<ul>

					<CategoryItem>
						<a>Разработка</a> <span>(3)</span>
					</CategoryItem>
					<CategoryItem current>
						<a>Гейминг</a>
						<span>(7)</span>
					</CategoryItem>
					<CategoryItem>
						<a>Электроника</a> <span>(11)</span>
					</CategoryItem>


				</ul>
			</WidgetCategory>
		</>
	)
}
export default CategoryWidget
