import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const PageHeader = ({ title }) => {
	const router = useRouter()
	const [route, setRoute] = useState("")
	useEffect(() => {
		let paths = router.pathname.split("/")
		setRoute(paths[paths?.length - 1])
	}, [router]);
	return (
		<>
			<Head>
				<title>BCS | {title || route.split("-").join(" ")}</title>
			</Head>
		</>
	)
}

export default PageHeader