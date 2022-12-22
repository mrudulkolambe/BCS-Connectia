import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG26 = () => {
	const list_01 = [
		"Scalability challenges",
		"Multiple vendor management",
		"Multiple components that can fail",
		"Security challenges"
	]

	const list_02 = [
		"Large upfront CapEx",
		"Time-consuming provisioning",
		"Difficulty to upgrade",
	]

	const list_03 = [
		"Scale without any limits",
		"Core Firewall",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Cloud Infrastructure" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Why is Cloud adoption important?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Cloud Infrastructure</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
							<ListContainer data={list_03} />
							<ListContainer data={list_03} />
						</div>
					</div>
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG26