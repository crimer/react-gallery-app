import React from 'react'
import Post from './Post'
import posts from '../../data/posts.json'
import { Posts } from './styles'

const PostsList = () => {
	return (
		<Posts>
			{posts.posts.map((post, key) => (
				<Post {...post} key={key} />
			))}
		</Posts>
	)
}

export default PostsList
