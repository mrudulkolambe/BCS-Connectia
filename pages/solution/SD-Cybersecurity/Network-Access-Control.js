import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG35 = () => {
	const list_01 = [
		"Unauthorized access to network ",
		"No authentication, authorization and control",
		"Growing usage of BYOD",
		"Lack of visibility of connected devices to network",
	]

	const list_02 = [
		"No visibility to threats within the network",
		"Lack of visibility of network devices",
		"Inability to view the network architecture and changes",
	]

	const list_03 = [
		"Total network visibility",
		"Guest network management",
		"Internal access management",
		"Network management",
		"Managing BYOD work arrangements",
		"Safe collaboration with corporate partners ",
	]
	const list_04 = [
		"Safe collaboration with corporate partners",
		"Handling IoT-based systems",
		"Improved cybersecurity",
		"More effective compliance",
		"Quicker Incident response",
		"Instant user profiling",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Network Access Control" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of Network Access</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto w-2/3'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Gain Control & Visibility with NAC </h1>
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

export default PG35