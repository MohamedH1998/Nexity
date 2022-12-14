'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'

function ClientSideRoute({children, route}: { children: ReactNode, route: string}) {
  return (
    <Link href={route}>{children}</Link>
  )
}

export default ClientSideRoute