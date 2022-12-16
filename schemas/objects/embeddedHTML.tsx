import React from 'react'
import { defineField, defineType } from 'sanity'

const HTMLpreview = ({value}: any) => (
<div dangerouslySetInnerHTML={{__html: value.html}}/>
)

export default defineType({
  name: 'embedHTML',
  title: 'Embed HTML',
  type: 'object',
  fields: [
    defineField({
      name: 'html',
      title: 'HTML',
      type: 'text',
      description:
        'You usually want to avoid storing freeform HTML, but for embed codes it can be useful.',
    }),
  ],
  preview: {
    select: {
      html: 'html',
    },
  },
  components: {
    preview: HTMLpreview
  },
})