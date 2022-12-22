import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG27 = () => {
	const list_01 = [
		"Data security challenges",
		"Data integrity issues",
		"Costly endpoint infrastructure",
		"Lack of control over organizational information",
	]

	const list_02 = [
		"Time-consuming provisioning of devices",
		"Lack of a unified security policy on every device",
		"No visibility of endpoint inventory",
	]

	const list_03 = [
		"Simplified management",
		"Flexibility",
		"Accessibility",
		"User experience",
		"Increased productivity",
		"Security & Backup",
	]

	const list_04 = [
		"Comprehensive security",
		"Multi-device support",
		"AI & Machine learning integration",
		"Increased visibility",
		"Enhanced IT Security",
		"Improved user experience",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="SD-End Computing" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of traditional endpoints infrastructure</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Modernize endpoints with VDI & UEM </h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
							<ListContainer title={"VDI"} data={list_03} />
							<ListContainer title={"UEM"} data={list_04} />
						</div>
					</div>
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG27