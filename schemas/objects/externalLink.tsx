import React, { ReactNode } from 'react'
import { defineField, defineType } from 'sanity'

interface Props {
    children: ReactNode
}


const LinkRender = ({children}: Props) => <span>{children} 🌍</span>

export default defineType({
  title: 'URL',
  name: 'externalLink',
  type: 'object',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),
  ],
  // blockEditor: {
  //   icon: () => '🌍',
  //   render: LinkRender,
  // },
})
