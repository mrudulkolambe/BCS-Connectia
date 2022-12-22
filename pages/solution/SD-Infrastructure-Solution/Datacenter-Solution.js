import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG28 = () => {
	const list_01 = [
		"30% of downtime events are caused by environmental factors",
		"40% of businesses close within 1 year after a major event",
		"75% of SMBs don't have environment monitoring in place",
	]

	const list_02 = [
		"During downtime, ongoing costs continue to accrue while business and profits are lost",
		"Failure of a primary or backup air conditioner remains the major threat to all IT or computer facilities",
	]

	const list_03 = [
		"Heat Index",
		"Digital Temperature",
		"Digital Outdoor temperature",
		"Digital Humidity",
		"Digital Active Power",
		"Main/UPS power",
		"Heat Index",
	]

	const list_04 = [
		"Fuel/ Water tank level",
		"Light towers",
		"Motion, Room Entry",
		"HVAC & BMS Outputs",
		"Network Cameras",
		"Analog Sensors",
		"Low voltage sensors",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Datacenter Solution " img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>What Will You Do When Disaster Strikes?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Proactive Approach Is The Best- Environmental Monitoring</h1>
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

export default PG28