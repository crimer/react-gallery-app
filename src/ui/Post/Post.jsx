import React from 'react'
import TextEllipsis from 'react-text-ellipsis'
import { FaCommentAlt, FaHeart } from 'react-icons/fa'
import { AiOutlineLike,AiOutlineComment } from 'react-icons/ai'

import {
	PostStyle,
	PostContainer,
	Header,
	Footer,
	Shares,
	Main,
	Tags,
} from './styles'
import { formatDate } from '../../global/common/utils'

const Post = ({ author, title, body, comments, likes, tags, createdAt }) => {
	return (
		<PostStyle>
			<PostContainer>
        <img src="https://c.dns-shop.ru/thumb/st1/fit/760/456/9d96bd1ea516d77060a4b573dbbd89a3/q93_dd301cf63b000b977eabdba0b47ce6cfcd2d3f69dd3a126d3e5c9f810e821b56.jpg.webp" alt=""/>
				<Header>

					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/russ.jpeg"
						alt=""
					/>
					<h3>{author}</h3>
				</Header>
				<Main>
					<h1>
						<a href="/">{title}</a>
					</h1>
					<div>
						<TextEllipsis lines={2} tag={'p'} ellipsisChars={'...'}>
							{body}
						</TextEllipsis>
					</div>
				</Main>
				<Tags>
					{tags.map(tag => (
						<li>
							<a href="/">{tag}</a>
						</li>
					))}
				</Tags>
				<Footer>
					<div>
						<span>{formatDate(createdAt)}</span>
						<Shares>
							<p>
								<a href="#">
									<AiOutlineComment />
									<span>{comments}</span>
								</a>
							</p>
							<p>
								<a href="#">
									<AiOutlineLike />
									<span>{likes}</span>
								</a>
							</p>
						</Shares>
					</div>
				</Footer>
			</PostContainer>
		</PostStyle>
	)
}

export default Post
