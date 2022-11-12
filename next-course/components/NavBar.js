import React from 'react'
import Link  from 'next/link'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <h3>MK</h3>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninjas</Link>
    </div>
  )
}

export default NavBar