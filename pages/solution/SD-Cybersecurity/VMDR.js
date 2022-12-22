import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG31 = () => {
	const list_01 = [
		"How do you track and discover IT, OT & IoT assets?",
		"No regular vulnerability scanning on systems and applications",
		"Still using Windows update for managing the patches",
	]

	const list_02 = [
		"How do you manage patches for non-windows OS or mobile devices?",
		"Patching non-windows 3rd party or container-based applications?",
		"Provisioning patches can be a hectic task",
	]

	const list_03 = [
		"Identify",
		"Analyze",
		"Understand and manage",
	]

	const list_04 = [
		"Remediate",
		"Automate",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="VMDR Solution " img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Application Vulnerability and Patching</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Automate Vulnerability Detection and Patch Management with Qualy</h1>
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

export default PG31