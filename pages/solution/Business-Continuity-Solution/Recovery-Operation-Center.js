import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import ListContainer from '../../../components/ListContainer'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import CTA1 from '../../../components/CTA_style1';
import Footer from '../../../components/footer'

const PG14 = () => {
	const list_01 = [
		"Backup failures",
		"Ransomware attacks",
		"Backup SLA - RTO/RPO issues Database backup challenges Application backup challenges",
		"Slow Backup",
		"Incomplete Backup"
	]
	const list_02 = [
		"No backup testing",
		"Backup data corruption",
		"Bare metal recovery challenges",
		"Slow recovery",
		"Backup inaccessible",
		"Recovery resource scarcity"
	]
	const list_03 = [
		"No DR testing",
		"DR Bandwidth issues",
		"DR SLA - RTO/RPO issues",
		"Failover/Failback issues",
		"Realtime time availability",
		"Costly downtime",
		"Lack of proper DR plan"
	]


	const list_04 = [
		"Automated Weekly/Monthly/Quaterly, Yearly DR testing",
		"Automated Weekly/Monthly/Quaterly, Yearly Backup testing",
		"Automated Weekly/Monthly/Quaterly, Yearly Offsite Backup testing",
		"SAS, BAS, DRAS, reporting & alerting services",
		'Backup, DR, Tape, Offsite backup assured'
	]

	const list_05 = [
		"Monthly, Quaterly SLA reporting",
		"Backup, DR testing and offsite backup testing report Weekly, Monthly and Quaterly",
		"DR automation & Orchestration",
		'Network Automation & Orchestration',
		"Simplified & Guaranteed Business Continuity"
	]
	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title={"Recovery Operation Center"} img="/solution/1.4.png" />
			<Layout>
				<Breadcrumb />
				<div className='mt-10 flex gap-x-6 flex-col'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Common Business Continuity Challenges</h1>
					<div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6'>
						<ListContainer title="Backup Challenges" data={list_01} />
						<ListContainer title="Recovery Challenges" data={list_02} />
						<ListContainer title="Disaster Recovery Challenges" data={list_03} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/1.4.1.png" alt="" className='w-full lg:w-5/12 object-cover' />
					<div className='flex flex-col'>
						<h1 className='lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Recovery Operation Center</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6'>
							<ListContainer data={list_04} />
							<ListContainer data={list_05} />
						</div>
					</div>
				</div>
				<CTA1 />
			</Layout>
			<Footer />
		</>
	)
}

export default PG14