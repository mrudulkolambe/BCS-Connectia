import React from 'react'

const ListContainer = ({ data, title }) => {
	return (
		<>
			<div className='bg-[#FFF9EB] p-5 '>
				{title && <span className='text-lg font-extrabold mb-6'>{title}</span>}
				<ul className='py-6'>
					{
						data && data?.map((item) => {
							return <div key={item} className="flex items-center gap-x-3 font-semibold py-2"><span className='h-2 w-2 rounded-full bg-red'></span>{item}</div>
						})
					}
				</ul>
			</div>
		</>
	)
}

export default ListContainer