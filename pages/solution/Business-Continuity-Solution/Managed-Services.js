import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer'
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG16 = () => {
	const list_01 = [
		"BCS Cloud DR with RTO & RPO 5 Min",
		"Offsite Backup solution on cloud for Physical, Virtual, Emails and Files.",
		"Application Failover & Failback",
		"Automated DR Testing & Reporting"
	]
	const list_02 = [
		"DR Automation & Orchestration",
		"Network Automation & Orchestration",
		"Simplified & Guarantied Business Continuity in just one clicks"
	]

	const list_03 = [
		"HCI Infrastructure",
		"HCI Backup",
		"Rack servers",
		"Blade servers"
	]

	const list_04 = [
		"All Flash & Hybrid Storages",
		"Unified NAS solutions",
		"SAN Switches",
		"Server Virtualization"
	]

	const list_05 = [
		"Next Generation Firewall",
		"Web Application Firewall",
		"Web & Email Security",
		"NAC & IOT Security",
		"Sandboxin",
		"DDos & DNS Security"
	]

	const list_06 = [
		"Identity & Access Management",
		"Multi factor Authentication",
		"Secure Remote Access",
		"Secure Information Sharing"
	]

	const list_07 = [
		"VDM Infrastructure",
		"MDM Solutions",
		"End-Computing",
		"End-point Backup",
		"Next-Gen Endpoint Security"
	]

	const list_08 = [
		"Synchronized Security",
		"ATP & Ransomware protection",
		"Endpoint Encryption",
		"Data Lead Prevention",
		"Patch Management",
		"Desktop Management"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title={"Managed Services"} img="/solution/1.4.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-6 lg:flex-row flex-col'>
					<img src="/solution/1.6.1.png" alt="" className='lg:w-5/12 w-full' />
					<div>
						<h1 className='lg:text-6xl text-4xl mt-3 lg:mt-0 font-extrabold'>Managed Services</h1>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold'>Business Continuity</h5>
						<div className='grid lg:grid-cols-2 gap-6 mt-10 grid-cols-1'>
							<ListContainer data={list_01} />
							<ListContainer data={list_02} />
						</div>
					</div>
				</div>

				<div className='my-10 mt-20 flex gap-6 lg:flex-row flex-col-reverse'>
					<div>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold lg:w-1/2 w-full'>SD Infrastructure</h5>
						<div className='grid lg:grid-cols-2 mt-10 gap-6 flex-cols-1'>
							<ListContainer data={list_03} />
							<ListContainer data={list_04} />
						</div>
					</div>
					<div>
						<img src="/solution/1.6.2.png" alt="" />
					</div>
				</div>

				<div className='my-10 flex gap-6 lg:flex-row flex-col'>
					<img src="/solution/1.6.3.png" alt="" className='lg:w-5/12 w-full' />
					<div>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold'>SD Security</h5>
						<div className='grid lg:grid-cols-2 gap-6 mt-10 grid-cols-1'>
							<ListContainer data={list_05} />
							<ListContainer data={list_06} />
						</div>
					</div> 
				</div>

				<div className='my-10 mt-20 flex gap-6 lg:flex-row flex-col-reverse'>
					<div>
						<h5 className='lg:text-4xl text-2xl mt-3 lg:mt-10 font-extrabold lg:w-1/2 w-full'>END Computing</h5>
						<div className='grid lg:grid-cols-2 mt-10 gap-6 grid-cols-1'>
							<ListContainer data={list_07} />
							<ListContainer data={list_08} />
						</div>
					</div>
					<div>
						<img src="/solution/1.6.2.png" alt="" />
					</div>
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG16