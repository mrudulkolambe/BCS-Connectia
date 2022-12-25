import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import ListContainer from '../../../components/ListContainer';
import CTA1 from '../../../components/CTA_style1'
import Footer from '../../../components/footer'

const PG41 = () => {

	const list_03 = [
		"Support dual-band 802.11ac 2x2 MIMO Wi-Fi module for wireless deployment with enhanced network stability and efficiency.",
		"Embedded dual Bluetooth 5.0 chipsets for extended features such as Bluetooth gateway pairing with RoomSensor to enable auto reserve/release*.",
	]
	const list_04 = [
		"Support NFC/RFID for advanced ID authorization and attendee check-in*.",
		"Built-in microphone array and dual speakerphones for future expansions like virtual assistants, administrator call, etc.",
		"Compatible with MS Teams, Zoom, Flowscape, Appspace etc.",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Meeting Room Booking Solution" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Meeting Room Booking Solutions</h1>
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

export default PG41