import React from 'react'
import {Post} from './Post.jsx'
import posts from '../../global/data/posts.json'
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
