import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG34 = () => {
	const list_01 = [
		"Degrading performance when security capabilities are on.",
		"No Artificial Intelligence or Machine learning capabilities",
		"Reason for the bottleneck with modern-day internet speeds",
		"Complex licensing model",
	]

	const list_02 = [
		"Defenseless against unknown and encrypted threats.",
		"No defense against modern malware attacks",
		"Lack of analytic features",
		"Complex management ",
	]

	const list_03 = [
		"Fully AI and ML based NGFW",
		"Detection of known and unknown threats including encrypted traffic",
		"Ability to stop credential theft",
		"Highly efficient processing architecture for highest performance",
	]
	const list_04 = [
		"Application oriented security",
		"Zero Trust Architecture for highest level of protection",
		"Built-in analytics and deep visibility",
		"Simplified management",
		"Simplified licensing",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Next Generation Firewall" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of Traditional Firewalls</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Modernize with Next- Gen Firewall</h1>
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

export default PG34