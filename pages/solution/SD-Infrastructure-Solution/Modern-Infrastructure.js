import React from 'react'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ImageBanner from '../../../components/ImageBanner';
import Layout from '../../../components/Layout';
import Breadcrumb from '../../../components/Breadcrumb';
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1';
import Footer from '../../../components/footer';

const PG21 = () => {
	const list_01 = [
		"Performance issues",
		"Many management consoles",
		"Multiple support contracts",
		"Multiple vendors to manage",
		"Multiple points of Failure & hurdles",
		"Difficult to scale & upgrade"
	]

	const list_02 = [
		"Complex and time-consuming firmware upgrades",
		"Lack of agility required by modern applications",
		"Cloud integration & security challenges",
		"Time-consuming to provision",
		"Remote office & Branch Office Management"
	]

	const list_03 = [
		"One single console to manage",
		"Single Vendor support",
		"10x more performance",
		"100% Software-defined",
		"One-Click Operations & upgrade"
	]
	const list_04 = [
		"Native Hypervisor",
		"Native replication & offsite backup",
		"No Single Point of Failure",
		"Built for Hybrid cloud",
		"Self-healing Systems",
		"Web-scale Engineering"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Modern Infrastructure" img="/solution/2.1.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of Legacy Infrastructure</h1>
					<div className='grid lg:grid-cols-4 grid-cols-1 gap-6 mt-5'>
						<div className='hidden lg:block'></div>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
						<div className='hidden lg:block'></div>
					</div>
				</div>
				<div className="flex gap-6 my-10 lg:flex-row flex-col">
					<img className="lg:w-4/12 w-full" src="/solution/2.1.1.png" alt="" />
					<div className=''>
						<h1 className='lg:text-6xl text-3xl mt-3 lg:mt-0 font-extrabold'>Modernize your Infrastructure with Nutanix</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10'>
							<ListContainer data={list_03} />
							<ListContainer data={list_04} />
						</div>
					</div>
				</div>
				<CTA1/>
			</Layout>
			<Footer/>
		</>
	)
}

export default PG21