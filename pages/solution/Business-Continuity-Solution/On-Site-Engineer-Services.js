import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import CTA1 from '../../../components/CTA_style1'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import ListContainer from '../../../components/ListContainer'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import Footer from '../../../components/footer'

const PG18 = () => {
	const list_01 = [
		"Highly qualified engineer dedicatedly on-site",
		"Monthly/Quaterly/Annual billing options",
		"Certified professionals with experience on Cisco, Nutanix, HPE, VMware, Microsoft, etc.",
		"Weekly/Monthly reporting on activities"
	]

	const list_02 = [
		"Custom KPI set for engineers to meet customer demands",
		"Backend support and resources from BCS Technical team",
		"Automated ticketing system for users"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="On-Site Engineer Services" img="/solution/1.8.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img className="lg:w-6/12 w-full" src="/solution/1.4.1.png" alt="" />
					<div className='flex flex-col'>
						<h1 className='lg:text-6xl text-4xl mt-3 lg:mt-0 lg:text-left text-center font-extrabold'>On-Site Engineer Services</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6'>
							<ListContainer data={list_01} />
							<ListContainer data={list_02} />
						</div>
					</div>
				</div>
				<CTA1/>
			</Layout>
			<Footer/>
		</>
	)
}

export default PG18