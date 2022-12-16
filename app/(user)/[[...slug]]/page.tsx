import React from 'react'
import { previewData } from 'next/headers'
import { notFound } from "next/navigation"
import PreviewSuspense from '../../../components/preview-suspense'
import groq from 'groq'
import { client } from '../../../lib/sanity.client'
import { slugParamToPath, getSlugVariations } from '../../../utils/urls'


type Props = {
  params: {
    slug: string
  }
}

const pageFragment = groq`
...,
content[] {
  ...,
  cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  }
}`

const siteConfigQuery = `
*[_id == "site-config"] {
  ...,
  logo {asset->{extension, url}},
  mainNavigation[] -> {
    ...,
    "title": page->title
  },
  footerNavigation[] -> {
    ...,
    "title": page->title
  }
}[0]
`

async function getEnrichedData(slug: string) {
  // Home route
  if (slug === '/') {
    const query = groq`*[_id=='site-config'][0]{
        frontpage -> {
            ${pageFragment}
        },

    }`
    const data = await client.fetch(query)
    const siteConfig = await client.fetch(siteConfigQuery)
    if (siteConfig && data?.frontpage) {
     const page = {...data.frontpage, slug}
     return {siteConfig, page}
    }
    if (!siteConfig && data?.frontpage) {
      return {page: {...data.frontpage, slug}}
    }
    if (!siteConfig && !data?.frontpage) {
      return undefined
    }
  } else {
// Regular route
    const query = groq`*[_type=='route' && slug.current in $possibleSlugs][0]{
        page -> {
            ${pageFragment}
        }
    }`
    const data = await client.fetch(query, 
    {possibleSlugs: getSlugVariations(slug)})
    const siteConfig = await client.fetch(siteConfigQuery)
    if (siteConfig && data?.page) {
      const page = {...data.page, slug};
      return  {siteConfig, page}
    }
    if (!siteConfig && data?.page) {
      return {page: {...data.page, slug}}
    }
    if (!siteConfig && !data?.page) {
      return undefined
    }
}
}

async function HomePage({params}: Props) {
    const currentSlug = slugParamToPath(params?.slug)
    const data = await getEnrichedData(currentSlug);
  console.log(data)
    if (data?.page._type !== 'page') {
      return notFound()
    }
    
    const { title = 'Missing title', description, openGraphImage, content, slug} = data.page;

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