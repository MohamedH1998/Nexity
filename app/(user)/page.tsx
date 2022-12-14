import React from 'react'
import { previewData } from 'next/headers'
import { groq} from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../../components/preview-suspense'
import BlogList from '../../components/blog-list'
import PreviewBlogList from '../../components/preview-blog-list'

// get all the posts with the type posts, select all the fields,
//as author and categories are references, expand them and order them by desc order in which they were created
// -> is similar to sql join
const query = groq`
*[_type == 'post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export const revalidate = 60

async function HomePage() {
if (previewData()) {
  return (<PreviewSuspense fallback={(
    <div role="status">
      <p className="text-center text-lg animate-pulse text-[#F7AB0A]">Loading Preview Data...</p>
    </div>
  )}>
    <PreviewBlogList query={query}/>
  </PreviewSuspense>)
}
const posts = await client.fetch(query);
  return (
    <BlogList posts={posts}/>
  )
}

export default HomePage