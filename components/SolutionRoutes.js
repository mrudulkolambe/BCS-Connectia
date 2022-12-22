import Link from 'next/link'
import React from 'react'

const SolutionRoutes = ({ show }) => {
	return (
		<>
			<div className={show ? 'hidden text-white absolute bg-red top-[8.5rem] left-0 w-full py-4 px-10 z-[1000] lg:grid lg:grid-cols-4 grid-cols-1 gap-10' : 'hidden'}>
				<div className='text-left '>
					<h1 className='py-3 border-b-2 border-white font-bold'>Business Continuity Solution</h1>
					<div className='flex flex-col text-sm'>
						<Link href="/solution/Business-Continuity-Solution/SD-Disaster-Recovery-Solutions" className='cursor-pointer py-2 mt-3'>SD-Disaster Recovery Solutions</Link>
						<Link href="/solution/Business-Continuity-Solution/Network-Operation-Center" className='cursor-pointer py-2'>Network Operations Center</Link>
						<Link href="/solution/Business-Continuity-Solution/Security-Operation-Center" className='cursor-pointer py-2'>Security Operation Center</Link>
						<Link href="/solution/Business-Continuity-Solution/Recovery-Operation-Center" className='cursor-pointer py-2'>Recovery Operation Center</Link>
						<Link href="/solution/Business-Continuity-Solution/Software-Defined-AMC" className='cursor-pointer py-2'>Software Defined AMC</Link>
						<Link href="/solution/Business-Continuity-Solution/Managed-Services" className='cursor-pointer py-2'>Managed Services</Link>
						<Link href="/solution/Business-Continuity-Solution/SD-Marketing" className='cursor-pointer py-2'>SD-Marketing</Link>
						<Link href="/solution/Business-Continuity-Solution/On-Site-Engineer-Services" className='cursor-pointer py-2'>On-Site Engineer Services</Link>
					</div>
				</div>
				<div className='text-left '>
					<h1 className='py-3 border-b-2 border-white font-bold'>SD-Infrastructure Solution</h1>
					<div className='flex flex-col text-sm'>
						<Link href="/solution/SD-Infrastructure-Solution/Modern-Infrastructure" className='cursor-pointer py-2 mt-3'>Modern Infrastructure</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Enterprise-Backup-Solution" className='cursor-pointer py-2'>Enterprise Backup Solution</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Backup-Solution-For-SMEs" className='cursor-pointer py-2'>Backup Solution for SMEs</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Immutable-Storage" className='cursor-pointer py-2'>Immutable Storage</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Next-Genereation-Network" className='cursor-pointer py-2'>Next Genereation Network</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Cloud-Infrastructure" className='cursor-pointer py-2'>Cloud Infrastructure</Link>
						<Link href="/solution/SD-Infrastructure-Solution/SD-End-Computing" className='cursor-pointer py-2'>SD-End Computing</Link>
						<Link href="/solution/SD-Infrastructure-Solution/Datacenter-Solution" className='cursor-pointer py-2'>Data Center Solution</Link>
					</div>
				</div>
				<div className='text-left '>
					<h1 className='py-3 border-b-2 border-white font-bold'>SD-Cybersecurity</h1>
					<div className='flex flex-col text-sm'>
						<Link href={'/solution/SD-Cybersecurity/VMDR'} className='cursor-pointer py-2 mt-3'>VMDR</Link>
						<Link href={'/solution/SD-Cybersecurity/Next-Gen-End-Point-Security'} className='cursor-pointer py-2'>Next Gen End Point Security</Link>
						<p className='cursor-pointer py-2'>SASE</p>
						<p className='cursor-pointer py-2'>PAM</p>
						<p className='cursor-pointer py-2'>Next Genereation Firewalls</p>
						<p className='cursor-pointer py-2'>Email Security</p>
						<p className='cursor-pointer py-2'>DNS Security</p>
						<p className='cursor-pointer py-2'>Network Access Control</p>
					</div>
				</div>
				<div className='text-left '>
					<h1 className='py-3 border-b-2 border-white font-bold'>Smart Office Solution</h1>
					<div className='flex flex-col text-sm'>
						<p className='cursor-pointer py-2 mt-3'>Smart Meeting Room</p>
						<p className='cursor-pointer py-2'>SD-Unified Communication</p>
						<p className='cursor-pointer py-2'>Video Conferencing Solution</p>
						<p className='cursor-pointer py-2'>Wireless Content Sharing</p>
						<p className='cursor-pointer py-2'>Meeting Room Booking</p>
						<p className='cursor-pointer py-2'>IP Telephony Solutions</p>
						<p className='cursor-pointer py-2'>Next Genereation Office</p>
						<p className='cursor-pointer py-2'>Digital Storage</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SolutionRoutes