import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG25 = () => {
	const list_01 = [
		"Most modern applications demand increased network speed and low latencies",
		"Servers and HCI Systems can support network speeds of up to 50Gbps",
		"Modern endpoints and mobile devices are capable of 5GHz & 6GHz Wi-Fi spectrums",
		"Speeds for 5GHz and 6GHz can reach up to 9.6Gbps",
	]

	const list_02 = [
		"Traditional 1Gbps network is bottleneck in delivering an excellent user experience.",
		"User/Employee experience is directly proportional to the organizational productivity.",
		"Managing many switches & cables to get 1 Gb speed whereas you can avail 9.6 GB on wireless",
		"Multiple consoles to manage switches & Wi-Fi",
	]

	const list_03 = [
		"Datacenter Switching",
		"Access Switching",
		"Wireless Access Points",
		"Core Firewall",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Next Generation Network" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>Challenges of legacy network</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5 w-2/3 m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-6xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Network Enhancements</h1>
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

export default PG25