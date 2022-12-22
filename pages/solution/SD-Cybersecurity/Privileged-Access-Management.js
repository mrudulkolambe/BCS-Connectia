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
		"Handling credentials of privileged accounts such as AD, Firewall, Network, Servers, SaaS apps can be challenging",
		"Privilege escalation is the most common exploit technique used by hackers during an attack.",
		"Compromising administrative credentials of Active directory, systems and network can be costly for your organization",
		"Restraining your users from sharing credentials is important",
	]

	const list_02 = [
		"How do you monitor the activities in a privileged account?",
		"Privileged accounts attack vector with increasing day by day due to cloud and SaaS adoption",
		"Identity management is challenging",
		"Risk of untrusted endpoints accessing privileged accounts",
	]

	const list_03 = [
		"Secure privileged access for any user from any device",
		"Just in time account provisioning for temporary users",
		"Proxy-based access to privileged accounts to avoid any chances of compromise",
		"Single sign on with MFA to all privileged accounts",
	]
	const list_04 = [
		"Auto-manage the credentials and schedule the password rotation policies",
		"Automatic account discovery to identify orphan accounts in the organization",
		"Easily create workflows and lifecycle for privileged account management",
	]

	return (
		<>
			<Navbar />
			<PageHeader />
			<ImageBanner title="Privileged Access Management" img="/solution/2.2.png" />
			<Layout>
				<Breadcrumb />
				<div className='my-5'>
					<h1 className='text-red lg:text-6xl text-4xl mt-3 lg:mt-0 text-center font-extrabold'>How do you manage your organization's privileges?</h1>
					<div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5  m-auto'>
						<ListContainer data={list_01} />
						<ListContainer data={list_02} />
					</div>
				</div>
				<div className='my-10 flex gap-x-6 lg:flex-row flex-col'>
					<img src="/solution/data-server.png" className='lg:w-5/12 w-full' alt="" />
					<div>
						<h1 className='font-extrabold lg:text-5xl mt-5 lg:mt-0 text-4xl lg:text-left text-center'>Secure your credentials with PAM</h1>
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