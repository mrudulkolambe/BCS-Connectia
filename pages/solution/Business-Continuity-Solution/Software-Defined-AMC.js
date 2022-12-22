import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import ListContainer from '../../../components/ListContainer'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG15 = () => {
	const list_01 = [
		"No NOC to monitor availability & performance",
		"No preventive maintenance",
		"No periodical review",
		"No security best practices",
		"No vulnerability scanning",
		"No recovery operation to manage your backup & DR",
		"No expert consultation"
	]
	const list_02 = [
		"No Business Continuity best practices",
		"Reactive support",
		"No dedicated technical account manager",
		"No proactive monitoring",
		"No vulnerability scanning",
		"Lack of domain-level expertise",
		"Lack of structure in escalation matrix"
	]

	const list_03 = [
		"Immediate Response",
		"Dedicated AM",
		"Dedicated SAM",
		"Preventive Maintenance",
		"Weekly reporting",
		"Customer Self Service Portal",
		"Chat Support",
		"Email Support"
	]

	const list_04 = [
		"Telephone Support",
		"Onsite support for critical outages",
		"Swift access to highly skilled engineers & resources",
		"Customer satisfaction management",
		"NOC access",
		"ROC Access",
		"Unlimited Support ticket"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Software Defined AMC" img="/solution/1.4.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Tired of traditional AMCs?</h1>
					<div className='grid lg:grid-cols-4 grid-cols-1 gap-6 mt-5'>
						<div className='hidden lg:block'></div>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
						<div className='hidden lg:block'></div>
					</div>
				</div>

				<div className="flex gap-6 my-10 lg:flex-row flex-col">
					<img className="lg:w-4/12 w-full" src="/solution/1.5.1.png" alt="" />
					<div className=''>
						<h1 className='lg:text-6xl text-3xl mt-3 lg:mt-0 font-extrabold'>BCS 24/7 x 365 Support with 1 Year Premium Support SLA</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10'>
							<ListContainer data={list_03} />
							<ListContainer data={list_04} />
						</div>
					</div>
				</div>
			<CTA1 />
			</Layout>
			<Footer/>
		</>
	)
}

export default PG15