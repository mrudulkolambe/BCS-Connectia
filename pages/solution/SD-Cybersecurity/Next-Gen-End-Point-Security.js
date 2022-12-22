import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG32 = () => {
	const list_01 = [
		"Most of the legacy AV are out from the market",
		"Manual updating of products",
		"Signature based Antivirus are highly vulnerable to Ransomware attacks",
		"Nearly 500,000 new malware signatures every single day",
		"No Advance threat visibility, detection & response",
	]

	const list_02 = [
		"No Auto threat protection, proactive threat hunting & rapid response.",
		"3 out of 4 malware evade traditional anti-virus engines",
		"Threats are generated within the organizational perimeters",
		"Ransomware damages estimated in the year 2021 alone were $20 Billion.",
		"No cloud management.",
	]

	const list_03 = [
		"Endpoint Detection and Response (EDR) Automatically detect and prioritize potential threats and quickly see where to focus attention and know which machines may be impacted",
		"Extended Detection and Response (XDR) Go beyond the endpoint by incorporating cross-product data sources for even more visibility",
		"Managed Detection and Response (MDR) Elite team of MDR threat hunters and response experts who take targeted actions on your behalf to neutralize even the most sophisticated threats",
		"Active Adversary Mitigations Active adversary mitigation prevents persistence on machines, credential theft protection, and malicious traffic detection",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Next-Gen End Point Security" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Still stuck with Traditional Anti-Virus?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Next-Gen Security with EDR, XDR & MTR</h1>
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

export default PG32