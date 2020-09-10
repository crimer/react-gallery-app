import { useEffect } from 'react'

export const UseOnClickOutside = (ref, handler) => {
	useEffect(() => {

		const listener = e => {
      console.log(ref, e.target);
			if (ref.current && !ref.current.contains(e.target))
			  handler(e)
		}

		document.addEventListener('touchstart', listener)
		document.addEventListener('click', listener)
		return () => {
			document.removeEventListener('click', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref])
}
