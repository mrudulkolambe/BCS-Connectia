import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG24 = () => {
	const list_01 = [
		"Backups are a prime target of Ransomware attacks.",
		"Backups are the last resort protection during any unexpected events or disaster.",
		"Tape troubles for managing long-term data retention",
		"Organizations must work on strict RPO & RTO SLAs to ensure minimal lose in productivity.",
	]

	const list_02 = [
		"Traditional NAS storages doesn't offer any protection against Ransomware attacks",
		"Traditional NAS storages doesn't offer data reduction techniques like deduplication or compression",
		"Backup restore performance is a challenge with the traditional backup storages.",
		"Managing multiple tapes for long term retention can be challenging.",
	]

	const list_03 = [
		"WORM (Write Once Read Many) architecture allows data to be immutable from any form of ransomware attacks.",
		"Performance tier for quick recovery of files and data",
		"Retention tier for long term backup retention and ransomware proof storage.",
		"Non-network facing air-gapped retention tier",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Immutable Storage" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>How secured is your backup storage?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Protect your Backup with Immutable Storage</h1>
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

export default PG24