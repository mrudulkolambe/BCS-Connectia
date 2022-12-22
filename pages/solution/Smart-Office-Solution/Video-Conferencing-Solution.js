import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG41 = () => {

	const list_03 = [
		"High-performance collaboration for large meeting rooms",
		"High-resolution 4K video conferencing",
		"Auto focus on the main speaker",
	]
	const list_04 = [
		"Integration with Microsoft Teams, Zoom, Bluejeans, 8x8 etc.",
		"One-touch dial from the integrated calendar",
		"Flexible camera and microphone options",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Video Conferencing Solution" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Next-Gen Video Conferencing Solutions</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
							<ListContainer data={list_03} />
							<ListContainer data={list_04} />
						</div>
					</div>
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG41