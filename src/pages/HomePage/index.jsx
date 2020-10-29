import React, { useState, useEffect, useRef } from 'react'
// import PostsList from '../../ui/Post/PostsList'
import { Modal } from '../../ui/molecules/Modal/Modal'
import { PageTemplate } from '../../ui/templates/PageTemplate'
import { Header, Sidebar, Footer, Hero } from '../../ui'
import { Gallery, GalleryFilters } from './styles'
import { Filter } from '../../features/Filter/Filter'

export const HomePage = () => {
	const [posts, setPosts] = useState([])
	const modalRef = useRef(null)

	const openModal = () => {
		modalRef.current.openModal()
	}
	const closeModal = () => {
		modalRef.current.closeModal()
	}
	const filters = [
		{
			id: 1,
			name: 'Tech',
			value: 'tech',
		},
		{
			id: 2,
			name: 'Natural',
			value: 'natural',
		},
		{
			id: 3,
			name: 'City',
			value: 'city',
		},
		{
			id: 4,
			name: 'Humans',
			value: 'Humans',
		},
	]
	return (
		<PageTemplate header={<Header />} footer={<Footer />} hero={<Hero />}>
			<Gallery>
				<GalleryFilters>
					{filters.map((item, i) => (
						<Filter item={item} />
					))}
				</GalleryFilters>
			</Gallery>
			<Modal ref={modalRef} title="Universal modal popup" />
			<button onClick={() => openModal()}>Show modal</button>
			{/* <section className="site-content-header category-header">
				<p className="category-header-text">Категория</p>
				<h1 className="category-header-title">JavaScript</h1>
				<p className="category-header-posts">7 постов</p>
				<PostsList />
			</section> */}
		</PageTemplate>
	)
}
