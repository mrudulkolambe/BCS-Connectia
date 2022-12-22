import React from 'react'

const BorderLeftComponent = ({ data, children }) => {
	return (
		<div className='p-4 bg-[#f2f4d8] flex py-4 flex-col' >
			<div className='border-l-4 pl-6 border-red font-semibold text-lg'>{data}</div>
			{children && <div>
				{children}
			</div>}
		</div>
	)
}

export default BorderLeftComponent