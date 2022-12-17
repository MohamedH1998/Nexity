import { NextSeo } from 'next-seo'
import { OpenGraphMedia } from 'next-seo/lib/types';
import React from 'react'

interface Props {
    title: string;
    description: string;
    canonical: string;
    openGraphImages: OpenGraphMedia[]
}
const SEO = ({title, description, canonical, openGraphImages}: Props) => {
  return (
    <NextSeo
    useAppDir={true}
    title={title}
    description={description}
    canonical={canonical}
    openGraph={{
      images: openGraphImages
    }}
    />
  )
}

export default SEO