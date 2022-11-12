import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const notFound = () => {

    const router = useRouter();

    useEffect(()=> {
       setTimeout(() => {
        router.push("/")
       }, 10000);
    }, [])

  return (
    <div className='not-found'>
        <h1>Error 404</h1>
        <h1>Ooops, page not found</h1>
        <p>Go bac to <Link href="/" className='not-found-link'>Home page</Link></p>
    </div>
  )
}

export default notFound 