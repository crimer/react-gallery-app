import React, { useState, useEffect, useRef } from 'react'
import PostsList from '../../components/Post/PostsList'
import './PostsPage.scss'
import { Modal } from '../../components/Modal/Modal'
import { PageTemplate } from '../../templates/PageTemplate/'
import { Header, Sidebar, Footer } from '../../components/index'

export const PostsPage = () => {
	const [posts, setPosts] = useState([])
	const modalRef = useRef(null)

	const openModal = () => {
		modalRef.current.openModal()
	}
	const closeModal = () => {
		modalRef.current.closeModal()
  }

	return (
		<PageTemplate header={<Header />} footer={<Footer />} sidebar={<Sidebar/>}>
			<Modal ref={modalRef} title="Universal modal popup" />
			<button onClick={() => openModal()}>Show modal</button>
			<section className="site-content-header category-header">
				<p className="category-header-text">Категория</p>
				<h1 className="category-header-title">JavaScript</h1>
				<p className="category-header-posts">7 постов</p>
				<PostsList />
			</section>
		</PageTemplate>
	)
}
