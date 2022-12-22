import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG35 = () => {
	const list_01 = [
		"DNS is a popular threat vector as per cybersecurity analysts",
		"Threats have increased due to rise of BYOD, IoT and hybrid office",
		"Common methods of attacks include DNS Spoofing, DNS tunneling, DNS amplification, DNS typo squatting etc.",
	]

	const list_02 = [
		"Denial of Service (DOS)",
		"Distributed Denial of Service (DDOS)",
		"DNS hijacking",
		"Man-in-the-middle attacks & zero-day attacks",
	]

	const list_03 = [
		"Enable web filtering by domain or category (SIG filtering by URL)",
		"Create custom block/allow lists of domains",
		"Block domains with malware, phishing, botnet, or other high-risk items",
		"Utilize SecureX cross product security data and automated response actions",
		"Access Umbrella's deep domain, IP, and ASN data for rapid investigations",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="DNS Security" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Why DNS protection is important?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto'>
						<ListContainer data={list_01} />
						<ListContainer title="Common types of attacks targeting DNS are" data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Secure DNS with Cisco Umbrella</h1>
						<div className='grid lg:grid-cols-1 grid-cols-1 gap-6 mt-8'>
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

export default PG35