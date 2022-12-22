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
		"Costly Licenses for every activated feature such as call recording, IVR, Billing etc.",
		"Costly maintenance of hardware-based UC systems",
		"Complex management and configuration",
	]

	const list_02 = [
		"Contact center require separate products integration or costly licenses",
		"Zero flexibility on deployment",
		"Soft-Clients, Soft-phones are complicated to provision and require expensive licenses",
	]

	const list_03 = [
		"Drastically reduce the unified communication cost by all-in-one 3CX license",
		"Deploy anywhere : as a virtual machine or in the cloud, Windows or Linux",
		"Single pane of glass to manage the entire UC system",
		"More than 600,000 installations globally",
	]
	const list_04 = [
		"Mobility - Modern Android and iOS apps, Web and Windows communications client, Corporate chat, Browser based video conferencing for all users, All at no extra charge.",
		"Call queues, IVR, advanced call reporting, contact center features, CRM integration, all included",
	] 

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="SD Unified Communication" img="/solution/2.2.png" />
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
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Simplify the Unified Communications Platform with 3CX</h1>
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