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
	const list_01 = [
		"Cannot walk up and use for interactive one click- meeting start",
		"Doesn't support digital whiteboard for hybrid environment",
		"Cannot Annotate presentation",
	]

	const list_02 = [
		"Investment on camera, speakers, cables, and Panel",
		"Cable mess",
		"No voice cancellation",
		"No flexibility to share the content after the meeting",
	]

	const list_03 = [
		"Bundles intelligent writing",
		"High Definition (HD) video conferencing",
		"wireless sharing",
		"A sleek, contemporary, user-centric design",
		"Virtually Face-to-Face: 4K content sharing",
	]
	const list_04 = [
		"Say Goodbye to Cables",
		"Tap to Start Meeting",
		"Crystal Clear- inbuilt An array of 12 microphones",
		"Stay Connected from Anywhere: With just a single tap, send whiteboard content and fresh ideas flying from the hub to remote sites",
	] 

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Smart Meeting Room" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Traditional Meeting Room-Challenges</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto w-2/3'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>New Style Smart Office-HUAWEI IdeaHub</h1>
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