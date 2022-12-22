import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG33 = () => {
	const list_01 = [
		"90% of the organizations use some form of Cloud-based applications.",
		"This has opened new vectors for malware to penetrate an organization.",
		"Work from anywhere, use of untrusted networks and BYOD has opened a threat vector along with the convenience it brings in.",
		"Traditional VPNs give user access to the entire network of an organization rather than a specific application.",
		"Data leakage vectors have grown drastically due to accelerated cloud adoption.",
	]

	const list_02 = [
		"Secure Web Gateway",
		"Zero Trust Network Access",
		"Cloud Access Security Broker",
	]

	const list_03 = [
		"Firewall as a Service",
		"Browser Isolation",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="SASE" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Security challenges in a Hybrid Environment</h1>
					<div className='grid lg:grid-cols-1 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Security Service Edge for 360° Protection</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
							<ListContainer data={list_02} />
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

export default PG33