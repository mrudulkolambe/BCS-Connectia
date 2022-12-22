import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG23 = () => {
	const list_01 = [
		"Multiple software & storage to backup SAAS applications",
		"Long backup window for downloading TBs of data",
		"Tape troubles for managing long-term data retention",
		"Multiple software for managing physical & virtual infrastructure",
		"Ransomware Protection issues"
	]

	const list_02 = [
		"Slow recovery & multiple RPOs",
		"Disaster Recovery challenges",
		"No direct cloud integration",
		"Multiple software for managing databases",
		"Multiple consoles to monitor & manage"
	]

	const list_03 = [
		"A True SaaS Solution",
		"Single console tool for the IT managers",
		"Local backup for SaaS application",
		"Zero recovery challenges for database",
		"No ingress & Egress charges for Cloud backup"
	]

	const list_04 = [
		"Supports both virtual & physical servers",
		"Reducing complexity",
		"Regulatory & compliance",
		"A true BaaS solution for all your backup needs",
		"Local backup is free of cost",
		"Hybrid Cloud Data Management",
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Backup Solution for SMEs" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of a legacy backup solution?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Metallic Cloud Backup from Commvault</h1>
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

export default PG23