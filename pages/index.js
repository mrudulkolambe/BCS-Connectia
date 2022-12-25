import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Pagination, Navigation, Autoplay } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Home() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) {
    return null;
  } else {
    return (
      <>
        <Navbar />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          //  autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="bghome pt-24 select-none">
              <div className="content">
                <h2 className="text-white bghome-header">
                  Digital <br />
                  Transformation
                </h2>
                <div className="flex mt-10">
                  <div className="slider"></div>
                  <div className="slider slider1"></div>
                  <div className="slider slider1"></div>
                </div>
                <div className="flex mt-20">
                  <FaArrowLeft
                    color="white"
                    size={30}
                    className="mr-20 swiper-button-prev"
                  />
                  <FaArrowRight
                    color="white"
                    size={30}
                    className="swiper-button-next"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bghome pt-24 select-none">
              <div className="content">
                <h2 className="text-white bghome-header">
                  Digital Transformation <br />
                </h2>
                <div className="flex mt-10">
                  <div className="slider slider1"></div>
                  <div className="slider slider"></div>
                  <div className="slider slider1"></div>
                </div>
                <div className="flex mt-20">
                  <FaArrowLeft
                    color="white"
                    size={30}
                    className="mr-20 swiper-button-prev"
                  />
                  <FaArrowRight
                    color="white"
                    size={30}
                    className="swiper-button-next"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>


        {/* content */}

        <div className="flex bg-red h-[60vh]">
          <div className="w-1/2 py-10 px-24">
            <h1 className="text-white font-extrabold text-xl">Modernize your infrastructure<br />with</h1>
            <img className="w-2/4 -mt-5 ml-16" src="/nutanix.png" alt="" />
            <ul className="text-white font-semibold text-sm flex flex-col gap-3 mt-12">
              <div className="flex items-center"><span className="bg-white h-1.5 w-1.5 rounded-full mr-4"></span><li>One single console to manage</li></div>
              <div className="flex items-center"><span className="bg-white h-1.5 w-1.5 rounded-full mr-4"></span><li>Single Vendor support</li></div>
              <div className="flex items-center"><span className="bg-white h-1.5 w-1.5 rounded-full mr-4"></span><li>10x more performance</li></div>
              <div className="flex items-center"><span className="bg-white h-1.5 w-1.5 rounded-full mr-4"></span><li>100% Software-defined</li></div>
            </ul>
            <button className="font-bold border-black border-2 hover:border-white hover:bg-red bg-black text-white px-4 mt-7 duration-300 py-2 rounded-lg">Know More</button>
          </div>
          <div className="w-1/2 h-full">
            <img src="/secondheader.png" className="h-full w-full" alt="" />
          </div>
        </div>
        <div className="flex bg-white h-[60vh] flex-row-reverse">
          <div className="w-1/2 py-10 px-24">
            <h1 className="text-red font-extrabold text-3xl">Next-Gen Security with EDR, XDR & MTR</h1>
            <hr className="my-6 border-black border" />
            <p className="text-black font-semibold text-sm flex flex-col gap-3 mt-12">
              Endpoint Detection and Response (EDR) Automatically detect and prioritize potential threats and quickly see where to focus attention and know which machines may be impacted
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-8">
                <FaArrowLeft />
                <FaArrowRight />
              </div>
              <button className="font-bold border-black border-2 hover:border-white hover:bg-red bg-black text-white px-4 mt-7 duration-300 py-2 rounded-lg">Know More</button>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img src="/thirdheader.png" className="h-full w-full" alt="" />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          autoplay={{ delay: 2500 }}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            400: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 15,
            },
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 15,
            },
          }}
          className="mySwiper "
          style={{
            "--swiper-pagination-color": "red",
          }}
        >
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="data-recovery.png" className="py-5 pl-5" />
                <Link href={'solution/Business-Continuity-Solution/Recovery-Operation-Center'} className="text-white px-5 pb-5">
                  SD-Disaster <br />
                  Recovery Solutions
                </Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">
                  Backup & Disaster Recovery
                  <br />
                  solution with BC Assured 5 <br />
                  min RTO & RPO
                </p>
                <p className="text-white py-4 px-5">
                  Network Automation & <br /> Orchestration solution.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="backup.png" className="py-5 pl-5 backup" />
                <Link  href={'/solution/SD-Infrastructure/Backup-Solution-For-SMEs'} className="text-white px-5 pb-5">
                  Backup Solution
                  <br />
                  for SMEs
                </Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">
                  A True SaaS Solution
                  <br />
                  Single console tool for the IT managers
                </p>
                <p className="text-white py-4 px-5">
                  Local backup is free of cost
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="data-exchange.png" className="py-5 pl-5 data-exchange" />
                <Link href={'/solution/SD-Cybersecurity/VMDR'} className="text-white px-5 pb-5">VMDR</Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">
                  Automate remediation with
                  <br />
                  no-code workflows
                </p>
                <p className="text-white py-4 px-5">
                  Quickly remediate threats at <br />
                  scale with automated patch <br /> management{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="communication.png" className="py-5 pl-5 communication" />
                <Link href="/solution/Smart-Office-Solution/SD-Unified-Communication" className="text-white px-5 pb-5">
                  SD-Unified <br />
                  Communication
                </Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">
                  Drastically reduce the unified
                  <br />
                  communication cost by all-
                  <br />
                  in-one 3CX license
                </p>
                <p className="text-white py-4 px-5">
                  More than 600,000 <br />
                  installations globally
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="database-storage.png" className="py-5 pl-5 communication" />
                <Link href={"/solution/SD-Infrastructure-Solution/Immutable-Storage"} className="text-white px-5 pb-5">Immutable Storage</Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">Total network visibility</p>
                <p className="text-white py-4 px-5">
                  Instant user profiling <br />
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="backup.png" className="py-5 pl-5 backup" />
                <Link href={"/solution/SD-Cybersecurity/Network-Access-Control"} className="text-white px-5 pb-5">
                  Network Access Control
                </Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white px-5 pt-2">A True SaaS Solution</p>
                <p className="text-white py-4 px-5">
                  Managing BYOD work
                  <br /> arrangements
                </p>
                <p className="text-white py-4 px-5">
                  Handling IoT-based systems
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="networking.png" className="py-5 pl-5 networking" />
                <Link href={'/solution/SD-Cybersecurity/Privileged-Access-Management'} className="text-white px-5 pb-5">PAM</Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white py-4 px-5">
                  Secure privileged access for any
                  <br /> user from any device
                </p>
                <p className="text-white py-4 px-5">
                  Just in time account
                  <br />
                  provisioning for temporary <br />
                  users
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red card select-none">
              <div className="card-content">
                <img src="communication.png" className="py-5 pl-5 communication" />
                <Link href={'solution/Business-Continuity-Solution/Recovery-Operation-Center'} className="text-white px-5 pb-5">Email Security</Link>
                <hr className=" h-px bg-white border-0 dark:bg-gray-700 w-48 ml-5"></hr>
                <p className="text-white py-4 px-5">
                  Patented Inline Protection
                  <br /> via API
                </p>
                <p className="text-white py-4 px-5">
                  300+ AI indicators with a
                  <br /> catch rate of 99%
                </p>
                <p className="text-white py-4 px-5">
                  Highest detection rate in the
                  <br />
                  industry
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="support-container flex mb-20">
          <div className="support-mastercontent">
            <div className="supoort-content">
              <h2>
                Security Service Edge
                <br />
                for 360° Protection
              </h2>
              <hr className=" h-px bg-black border-0 dark:bg-gray-700 mb-5"></hr>
              <ul className="">
                <li>Secure Web Gateway</li>
                <li>Zero Trust Network Access</li>
                <li>Cloud Access Security Broker</li>
                <li>Firewall as a Service</li>
                <li>Browser Isolation</li>
              </ul>
            </div>
          </div>
          <div className="pl-10 support-image">
            <img src="fourthheader.png" />
          </div>
        </div>
        <div className="bg-red huawei-container mb-20">
          <div className="huawei-content py-10">
            <h2>
              New Style Smart
              <br />
              Office-HUAWEI IdeaHub
            </h2>
            <div className="flex huawei-mastercard my-10">
              <div className="huawei-card">
                <img src="speaker.png" className="pt-10 pb-10 pl-5" />
                <p className="pl-5 pb-10">
                  Crystal Clear- inbuilt
                  <br />
                  An array of 12 microphones
                </p>
              </div>
              <div className="huawei-card">
                <img src="signature.png" className="pt-10 pb-10 pl-5" />
                <p className="pl-5 pb-10">
                  Bundles intelligent
                  <br />
                  writing
                </p>
              </div>
              <div className="huawei-card">
                <img src="videoconference.png" className="pt-10 pb-10 pl-5" />
                <p className="pl-5 pb-10">
                  High Definition (HD)
                  <br />
                  video conferencing
                </p>
              </div>
              <div className="huawei-card">
                <img src="wifi.png" className="pt-10 pb-10 pl-5" />
                <p className="pl-5 pb-10">Wireless sharing</p>
              </div>
              <div className="huawei-card">
                <img src="web-design.png" className="pt-10 pb-10 pl-5" />
                <p className="pl-5 pb-10">
                  A sleek, contemporary,
                  <br />
                  user-centric design
                </p>
              </div>
            </div>
            <button className="bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
              Know More
            </button>
          </div>
        </div>
        <div className="hoursupport grid mb-20 lg:px-32 lg:grid-cols-2 gap-6">
          <img src="contact.png" className="w-10/12 m-auto lg:m-0" />
          <div className="">
            <div className="">
              <h2 className="text-red lg:text-5xl text-3xl font-bold">
                BCS 24/7 x 365 Support with 1 Year Premium Support SLA
              </h2>
              <ul className="mt-10 flex flex-col gap-3 lg:px-0 px-10">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Immediate Response</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Dedicated AM</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Dedicated SAM</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>6 Preventive Maintenance</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Telephone Support</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Onsite Support for Critical Outages</li>
                </div>
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 bg-black rounded-full"></span><li>Weekly Reporting</li>
                </div>
              </ul>
              <button className="bg-red px-3 py-2 rounded-lg text-white font-bold mt-6 m-auto">Know More</button>
            </div>
          </div>
        </div>
        <div className="mb-20 map-conatiner">
          <img
            src="map.png"
            className="w-fullhttps://bcs-connectia.vercel.app/"
          />
          <div className="map-content">
            <h2>
              We Are Trusted
              <br />
              Nationwide Across
            </h2>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
