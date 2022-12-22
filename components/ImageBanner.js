import React from 'react'

const ImageBanner = ({ title, img, className }) => {
	return (
		<>
			<div className='relative lg:max-h-screen max-w-screen lg:h-screen w-screen h-[50vh]'>
				<div className={'h-full w-full object-cover bg-red bg-blend-multiply bg-no-repeat bg-cover bg-center ' + className} style={{ backgroundImage: `url(${img})` }} alt="" />
				<h1 className='absolute lg:top-1/2 bottom-1/4 lg:px-24 px-6 font-extrabold lg:text-7xl text-3xl text-white lg:w-9/12 lg:-translate-y-1/2 z-10 lg:text-left text-center'>{title}</h1>
			</div>
		</>
	)
}

export default ImageBanner