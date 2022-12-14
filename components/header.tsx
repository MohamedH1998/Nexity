import Link from 'next/link'
import React from 'react'
import { SiMaterialdesign } from 'react-icons/si'

function Header() {
  return (
<header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
    <div className="flex items-center space-x-2">
<Link href="/">
    <i className="font-5xl p-3">
        <SiMaterialdesign/>
    </i>
</Link>
<h1>Blog</h1>
    </div>

    <div>
        <Link href="https://www.momito.co.uk" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center">Check out my portfolio</Link>
    </div>
</header>
  )
}

export default Header