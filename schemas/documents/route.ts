import {LinkIcon} from '@sanity/icons'
import {DocumentTextIcon} from '@sanity/icons'
import { ReactNode } from 'react'
import { defineField, defineType } from 'sanity'

interface PreviewProps {
    slug: string,
    pageTitle: string
}

export default defineType({
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: LinkIcon as unknown as ReactNode,
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    }),
    defineField({
      name: 'page',
      type: 'reference',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page',
        },
      ],
    }),
    defineField({
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    }),
    defineField({
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    }),
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title',
    },
    prepare({slug, pageTitle}: PreviewProps) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      }
    },
  },
})