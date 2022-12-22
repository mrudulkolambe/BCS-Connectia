import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CTA1 from '../../../components/CTA_style1'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import ListContainer from '../../../components/ListContainer'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import Footer from '../../../components/footer'

const Page12 = () => {
	const list_01 = [
		"Fire related hazards",
		"UPS health monitoring Power and cooling issues",
		"Environmental monitoring",
		"Surge protection",
		"Rack & Cabinet security",
		"Space management",
		"Energy Metering"
	]
	const list_02 = [
		"Unplanned Network Outages",
		"Internet line disconnection issues Firewall bandwidth congestion",
		"Looping issue in switches",
		"VPN connectivity issue",
		"Wireless connectivity issue",
		"Wireless controller issue",
		"Access network bottlenecks"
	]
	const list_03 = [
		"Unplanned Server Outages",
		"Database performance issues",
		"Application performance issues",
		"Server resource maintainance",
		"Virtual Machines maintainance",
		"Lack of proper visibility",
		"Cloud applications monitoring",
		"Resource and capacity planning"
	]

	const list_04 = [
		"24/7 Monitoring (Mobile NOC)",
		"Proactive Health Monitoring",
		"Automated Ticket Creation",
		"Weekly, Monthly, Quaterly, Yearly Reporting",
		"Firewall, IP, IPFIX, Jitter, LAN, WIFI, Network, Traffic, Packet port, SNMP Monitoring"
	]

	const list_05 = [
		"WAN, Bandwidth, Latency, Internet, URL, Website Monitoring",
		"Application Monitoring Sharepoint, Emails, File, ERP",
		"Servers, Virtual machines, Storage, Linux, AD, Vmware, AHV Monitoring",
		"Cloud servers, Application, DNS, Website, SSL, monitoring"
	]
	return (
		<>
			<Navbar />
			<PageHeader title="Network Operation Centre" />
			<ImageBanner title="Network Operation Centre" img="/solution/1.2.1.png" />
			<Layout>
				<Breadcrumb />
				<div className='mt-10 flex gap-x-5 flex-col'>
					<h1 className='text-red font-extrabold text-center lg:w-10/12 w-full m-auto lg:text-6xl text-4xl' >Common Network & Infrastructure Challenges</h1>
					<div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
						<ListContainer data={list_03} />
					</div>
				</div>
				<div className='mt-20 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Network Operations Center</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
							<ListContainer data={list_04} />
							<ListContainer data={list_05} />
						</div>
					</div>
				</div>
				<div className='mt-20'>
					<CTA1 />
				</div>
			</Layout>
			<Footer />
		</>
	)
}

export default Page12