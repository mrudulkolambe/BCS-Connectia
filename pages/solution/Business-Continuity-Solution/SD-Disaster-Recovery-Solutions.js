import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb'
import ImageBanner from '../../../components/ImageBanner'
import Navbar from '../../../components/navbar'
import PageHeader from '../../../components/PageHeader'
import Layout from '../../../components/Layout'
import BorderLeftComponent from '../../../components/BorderLeftComponent'
import Footer from '../../../components/footer'

const Page11 = () => {
	return (
		<>
			<Navbar />
			<PageHeader title="SD-Disaster Recovery Solutions" />
			<ImageBanner title={"SD-Disaster Recovery Solutions"} img="/solution/1.1.png" />
			<Layout>
				<Breadcrumb />
				<div className='mt-10 flex gap-x-5 sm lg:flex-row flex-col'>
					<img src="/solution/1.2.png" alt="" />
					<div className='flex flex-col mt-4'>
						<h1 className='text-red font-extrabold text-3xl lg:text-5xl'>Challenges in Managing a Traditional DR</h1>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 mt-16'>
							<BorderLeftComponent data={"Maintenance of on-premise DR can be expensive"} />
							<BorderLeftComponent data={"Susceptible to ransomware attacks"} />
							<BorderLeftComponent data={"Traditional DRs are prone to environmental disasters such as fire, flood etc."} />
							<BorderLeftComponent data={"Failover and failback is a difficult process"} />
							<BorderLeftComponent data={"DR testing can be challenging"} />
						</div>
					</div>
				</div>
				<div className='lg:py-[6rem] py-10'>
					<h1 className='text-center lg:text-7xl text-3xl font-extrabold'>SD BUSINESS CONTINUITY SOLUTION</h1>
					<div className='grid lg:grid-cols-3 grid-cols-1 gap-x-6 mt-10 gap-y-10'>
						<BorderLeftComponent data={"Backup & Disaster Recovery solution with BC Assured 5 min RTO & RPO"}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/azure.png" className='w-4/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/bcs-cloud.png" className='w-4/12' alt="" />
							</div>
						</BorderLeftComponent>
						<BorderLeftComponent data={"Application & Database Failover, Fail-back in seconds for SQL, Oracle, SAP, IIS, any custom apps"}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/aws.png" className='w-4/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/etisalat.png" className='w-3/12' alt="" />
							</div>
						</BorderLeftComponent>
						<BorderLeftComponent data={"Offsite Backup solution for Physical, Virtual, Emails and Files."}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/alibaba-cloud.png" className='w-4/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/equinix.png" className='w-4/12' alt="" />
							</div>
						</BorderLeftComponent>
						<BorderLeftComponent data={"Simplified & Assured Business Contiuity in just one click."}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/ibm-cloud.png" className='w-4/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/azure.png" className='w-4/12' alt="" />
							</div>
						</BorderLeftComponent>
						<BorderLeftComponent data={"DR Automation & Orchestration Solutions."}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/etisalat.png" className='w-3/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/aws.png" className='w-4/12' alt="" />
							</div>
						</BorderLeftComponent>
						<BorderLeftComponent data={"Network Automation & Orchestration Solution."}>
							<div className='flex flex-col'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD PUBLIC CLOUD</p>
								<img src="/solution/bcs-cloud.png" className='w-4/12' alt="" />
							</div>
							<div className='flex flex-col mt-2'>
								<p className='mt-6 mb-2 text-[13px] font-medium'>SD BCS CLOUD</p>
								<img src="/solution/customer-cloud.png" className='w-4/12' alt="" />
							</div>
						</BorderLeftComponent>
					</div>
				</div>
				<h1 className='lg:text-7xl text-5xl font-extrabold mt-2'>FREEDOM OF CHOICE WITH BCS</h1>
			</Layout>
			<Footer />
		</>
	)
}

export default Page11