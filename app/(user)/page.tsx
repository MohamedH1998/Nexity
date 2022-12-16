import React from 'react'
import { previewData } from 'next/headers'
import PreviewSuspense from '../../components/preview-suspense'

async function HomePage() {
if (previewData()) {
  return (<PreviewSuspense fallback={(
    <div role="status">
      <p className="text-center text-lg animate-pulse text-blue-500">Loading Preview Data...</p>
    </div>
  )}>
    <h1 className="text-7xl font-bold underline">Welcome to Nexity - you're in preview</h1>
  </PreviewSuspense>)
}
  return (
    <h1 className="text-7xl font-bold underline">Welcome to Nexity</h1>

  )
}

export default HomePage