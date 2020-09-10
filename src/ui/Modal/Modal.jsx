import React, { forwardRef } from 'react'
import ReactDOM from 'react-dom'
import { ModalBg, Popup, CloseIcon, Button } from './styles'
import { useState } from 'react'
import { useImperativeHandle } from 'react'
import { useEffect } from 'react'

export const Modal = forwardRef(({ title }, ref) => {
	const [isOpen, setIsOpen] = useState(false)

	useImperativeHandle(ref, () => {
		return {
			openModal: () => open(),
			closeModal: () => close(),
		}
	})

	const open = () => {
		setIsOpen(true)
	}

	const close = () => {
		setIsOpen(false)
	}

	const handleKeyDown = e => e.key === 'Escape' && e.keyCode === 27 && close()

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [])

	if (isOpen) {
		return ReactDOM.createPortal(
			<>
				<ModalBg show={isOpen} />
				<Popup show={isOpen}>
					<header>
						<h2>{title}</h2>
						<CloseIcon onClick={close} />
					</header>
					<article>
						<p>
							Pellentesque habitant morbi tristique senectus et netus et
							malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
							vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
							amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
							placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
							pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
							ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
							condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
							dui.
						</p>
					</article>
					<footer>
						<Button succes>Accept</Button>
						<Button danger onClick={close}>Decline</Button>
					</footer>
				</Popup>
			</>,
			document.getElementById('modalRoot'),
		)
	}
	return null
})
