import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG22 = () => {
	const list_01 = [
		"Windows based backup systems are prone to ransomware attacks",
		"Multiple consoles to manage for each functionality",
		"High risk of data loss due to less frequent backup, missed backup etc.",
		"No admin access control",
		"No rapid response plans for cyberattacks",
		"Windows-based"
	]

	const list_02 = [
		"No immediate recovery for file shares & limited recovery features for VMs",
		"Just a backup - need multiple silos to address use cases beyond backup and recovery",
		"Time consuming provisioning",
		"Inefficient deduplication and compression results in high network traffic"
	]

	const list_03 = [
		"24/7 Monitoring (Mobile NOC)",
		"Proactive Health Monitoring",
		"Automated Ticket Creation",
		"Weekly, Monthly, Quaterly, Yearly Reporting",
		"Firewall, IP, IPFIX, Jitter, LAN, WIFI, Network, Traffic, Packet port, SNMP Monitoring"
	]

	const list_04 = [
		"WAN, Bandwidth, Latency, Internet, URL, Website Monitoring",
		"Application Monitoring Sharepoint, Emails, File, ERP",
		"Servers, Virtual machines, Storage, Linux, AD, Vmware, AHV Monitoring",
		"Cloud servers, Application, DNS, Website, SSL, monitoring"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Enterprise Backup Solution" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Common Network & Infrastructure Challenges</h1>
					<div className='grid lg:grid-cols-4 grid-cols-1 gap-6 mt-5'>
						<div className='hidden lg:block'></div>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
						<div className='hidden lg:block'></div>
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Network Operations Center</h1>
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

export default PG22