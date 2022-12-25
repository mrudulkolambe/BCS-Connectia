import Link from 'next/link'
import React, { useRef, useState } from 'react'

const SmallSolutionRoutes = ({ show }) => {
  const [state1, setState1] = useState(false)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)
  return (
    <>
      <div className={show ? 'text-white bg-red w-full p-2' : "hidden"}>
        <div className='text-left '>
          <h1 onClick={() => { setState1(!state1) }} className='py-3 border-b-2 border-white font-bold'>Business Continuity Solution</h1>
          <div className={state1 ? 'flex flex-col text-sm' : "hidden"}>
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
          <h1 onClick={() => { setState2(!state2) }} className='py-3 border-b-2 border-white font-bold'>SD-Infrastructure Solution</h1>
          <div className={state2 ? 'flex flex-col text-sm' : "hidden"}>
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
          <h1 onClick={() => { setState3(!state3) }} className='py-3 border-b-2 border-white font-bold'>SD-Cybersecurity</h1>
          <div className={state3 ? 'flex flex-col text-sm' : "hidden"}>
            <Link href={'/solution/SD-Cybersecurity/VMDR'} className='cursor-pointer py-2 mt-3'>VMDR</Link>
            <Link href={'/solution/SD-Cybersecurity/Next-Gen-End-Point-Security'} className='cursor-pointer py-2'>Next Gen End Point Security</Link>
            <Link href={'/solution/SD-Cybersecurity/SASE'} className='cursor-pointer py-2'>SASE</Link>
            <Link href={'/solution/SD-Cybersecurity/Privileged-Access-Management'} className='cursor-pointer py-2'>PAM</Link>
            <Link href={'/solution/SD-Cybersecurity/Next-Generation-Firewall'} className='cursor-pointer py-2'>Next Generation Firewall</Link>
            <Link href={'/solution/SD-Cybersecurity/Email-Security'} className='cursor-pointer py-2'>Email Security</Link>
            <Link href={'/solution/SD-Cybersecurity/DNS-Security'} className='cursor-pointer py-2'>DNS Security</Link>
            <Link href={'/solution/SD-Cybersecurity/Network-Access-Control'} className='cursor-pointer py-2'>Network Access Control</Link>
          </div>
        </div>
        <div className='text-left '>
          <h1 onClick={() => { setState4(!state4) }} className='py-3 border-b-2 border-white font-bold'>Smart Office Solution</h1>
          <div className={state4 ? 'flex flex-col text-sm' : "hidden"}>
            <Link href={'/solution/Smart-Office-Solution/Smart-Meeting-Room'} className='cursor-pointer py-2 mt-3'>Smart Meeting Room</Link>
            <Link href={'/solution/Smart-Office-Solution/SD-Unified-Communication'} className='cursor-pointer py-2'>SD-Unified Communication</Link>
            <Link href={'/solution/Smart-Office-Solution/Video-Conferencing-Solution'} className='cursor-pointer py-2'>Video Conferencing Solution</Link>
            <Link href={'/solution/Smart-Office-Solution/Wireless-Content-Sharing'} className='cursor-pointer py-2'>Wireless Content Sharing</Link>
            <Link href={'/solution/Smart-Office-Solution/Meeting-Room-Booking'} className='cursor-pointer py-2'>Meeting Room Booking</Link>
            <Link href={'/solution/Smart-Office-Solution/IP-Telephony-Solutions'} className='cursor-pointer py-2'>IP Telephony Solutions</Link>
            <Link href={'/solution/Smart-Office-Solution/Next-Generation-Office'} className='cursor-pointer py-2'>Next Generation Office</Link>
            <Link href={'/solution/Smart-Office-Solution/Digital-Signage'} className='cursor-pointer py-2'>Digital Signage</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallSolutionRoutes