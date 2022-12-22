import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Breadcrumb = () => {
	const router = useRouter()
	const [pathname, setPathname] = useState([])
	useEffect(() => {
		let pathname = router.pathname.split("/").splice(1);
		setPathname(pathname)
	}, [router]);
	return (
		<>
			<p>
				{
					pathname && pathname.map((path, index) => {
						if (index === pathname.length - 1) {
							return <span className='font-bold capitalize' key={Math.random() + index}>{path.split("-").join(" ")}</span>
						} else {
							return <span className='capitalize' key={Math.random() + index}>{path.split("-").join(" ")} {">"} </span>
						}
					})
				}
			</p>
		</>
	)
}

export default Breadcrumb