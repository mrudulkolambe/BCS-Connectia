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
		"Self-management of displays",
		"Media library management",
		"Access to free media repositories",
		"Unlimited screen templates",
		"3 GB storage per screen"
	]
	const list_04 = [
		"Composition and playlist",
		"Content scheduling",
		"Unlimited app access",
		"Reports and proof of play",
		"User and role management",
		"Audit logs",
		"24X7 email support",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Digital-Signage" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Digital Signage Automation Solutions</h1>
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