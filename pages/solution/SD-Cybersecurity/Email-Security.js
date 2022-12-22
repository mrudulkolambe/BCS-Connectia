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
		"Gateway based security was built for on-premise exchange era",
		"Migration to M365 and G-Suite platforms have opened new attack vectors",
		"Gateway based email securities requires MX record change",
		"MX records are publicly available and can risk the security posture of organizations",
	]

	const list_02 = [
		"Minimal Artificial Intelligence provides hardly any resistance towards modern malwares, BEC and impersonation attacks",
		"Traditional gateways needs blocking of built-in security by Microsoft or Google.",
		"Zero protection for SaaS based applications like OneDrive, Teams, Google Drive, Bo.",
		"Gateway-based",
	]

	const list_03 = [
		"Patented Inline Protection via API",
		"300+ AI indicators with a catch rate of 99%",
		"Search and Destroy similar malicious emails that are present anywhere in the mailbox (Similar to EDR in endpoint)",
		"Highest detection rate in the industry",
		"Advanced analytics and SIEM integration",
		"Complete cloud security for emails and collaboration apps like OneDrive, Teams, Google Drive, Box, Slack, Dropbox etc.",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Email Security" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Legacy Email Security - Challenges</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Modernize your Email Security with API approach</h1>
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