import React from 'react'

const Layout = ({ children }) => {
	return (
		<>
			<div className='lg:px-28 lg:py-10 px-3 py-6'>{children}</div>
		</>
	)
}

export default Layout