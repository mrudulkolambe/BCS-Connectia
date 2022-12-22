import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CTA1 from '../../../components/CTA_style1'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import ListContainer from '../../../components/ListContainer'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import Footer from '../../../components/footer'

const PG17 = () => {
	const list_01 = [
		"Web Applications",
		"Website Developments",
		"Payment Gateways"
	]
	const list_02 = [
		"Mobile Application",
		"Website Optimization"
	]

	const list_03 = [
		"SEO Optimization",
		"Website Traffic",
		"Social Media",
		"Google Pay per Click"
	]

	const list_04 = [
		"Email Marketing",
		"Digital Advertising",
		"SAN Switches",
		"Google Business Listing"
	]

	const list_05 = [
		"Logo Designing",
		"Videography",
		"Photography"
	]
	const list_06 = [
		"Intro / Walk-through 1 min video",
		"Creative Writing",
		"Graphic Design"
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="SD-Marketing" img="/solution/1.7.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-6 lg:flex-row flex-col'>
					<img src="/solution/1.7.1.png" alt="" className='lg:w-5/12 w-full' />
					<div>
						<h1 className='lg:text-6xl text-4xl mt-3 lg:mt-0 font-extrabold'>Managed Services</h1>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold'>SD Web Solutions</h5>
						<div className='grid lg:grid-cols-2 gap-6 mt-10 grid-cols-1'>
							<ListContainer data={list_01} />
							<ListContainer data={list_02} />
						</div>
					</div>
				</div>

				<div className='my-10 mt-20 flex gap-6 lg:flex-row flex-col-reverse'>
					<div>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold lg:w-1/2 w-full'>SD Marketing</h5>
						<div className='grid lg:grid-cols-2 mt-10 gap-6 flex-cols-1'>
							<ListContainer data={list_03} />
							<ListContainer data={list_04} />
						</div>
					</div>
					<div>
						<img src="/solution/1.7.2.png" alt="" />
					</div>
				</div>

				<div className='my-10 flex gap-6 lg:flex-row flex-col'>
					<img src="/solution/1.7.3.png" alt="" className='lg:w-5/12 w-full' />
					<div>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold'>SD Branding</h5>
						<div className='grid lg:grid-cols-2 gap-6 mt-10 grid-cols-1'>
							<ListContainer data={list_05} />
							<ListContainer data={list_06} />
						</div>
					</div>
				</div>
				<CTA1/>
			</Layout>
			<Footer/>
		</>
	)
}

export default PG17