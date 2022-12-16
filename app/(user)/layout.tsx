import { groq } from 'next-sanity';
import React from 'react';
import { client } from '../../lib/sanity.client';
import '../../styles/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactElement
}) {


  const query = await groq`*[_type=='site-config']{lang}[0].lang`
  const lang = await client.fetch(query);

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

  const config = await client.fetch(siteConfigQuery);

  if (!config) {
    return (
      <html lang={lang || 'en'}>
        <body>
          {children}
          </body>
      </html>
    )
  }

  return (
    <html lang={lang || 'en'}>
      <body>
        {React.cloneElement(children, {props: config})}
        </body>
    </html>
  )
}
