import Navbar from '../../../components/navbar'
import React from 'react'
import Layout from '../../../components/Layout'
import Breadcrumb from '../../../components/Breadcrumb'
import PageHeader from '../../../components/PageHeader'
import ImageBanner from '../../../components/ImageBanner'
import ListContainer from '../../../components/ListContainer'
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG13 = () => {
	const list_01 = [
		"Help Customer / Stake Holder feel Secure",
		"Identify Treads before they became critical",
		"Proactive security monitoring system & alerts",
		"Continues protection to entire network",
		"Root cause analysis",
		"Application Performance & Venerability monitoring"
	]
	const list_02 = [
		"Ransomware protection & detections",
		"Machine learning tools & alerting system",
		"CVAS (Continuous Vulnerability Assesment Scanners)",
		"Simplify Investigation and identify the source of Attack",
		"Security & Business Analytics",
		"SIEM (System Information & Event Manager"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title={"Security Operation Center"} img="/solution/1.3.png" className="image.png"/>
			<Layout>
				<Breadcrumb />
				<div className='mt-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/1.3.1.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='lg:text-6xl text-4xl mt-3 lg:mt-0 lg:text-left text-center font-extrabold'>Security Operation Center</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6'>
							<ListContainer data={list_01} />
							<ListContainer data={list_02} />
						</div>
					</div>
				</div>
				<div className='my-10 flex gap-10 lg:flex-row flex-col-reverse'>
					<div className='flex flex-col justify-evenly'>
						<h2 className='lg:text-5xl text-3xl font-bold lg:text-right text-center mb-4'>Security Service Edge for 360&deg; Protection</h2>
						<div className='flex flex-col gap-4 text-xl lg:text-right text-center'>
							<p>Secure Web Gateway</p>
							<p>Zero Trust Network Access</p>
							<p>Cloud Access Security Broker</p>
							<p>Firewall as a Service</p>
							<p>Browser Isolation</p>
						</div>
					</div>
					<img src="/solution/1.3.2.png" className='lg:w-6/12 w-full' alt="" />
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG13