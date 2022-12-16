import {DocumentTextIcon} from '@sanity/icons'
import { ReactNode } from 'react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    type: 'document',
    icon: DocumentTextIcon as unknown as ReactNode,
    title: 'Page',
    fieldsets: [
        {
            title: 'SEO & metadata',
            name: 'metadata'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'content',
            type: 'array', 
            title: 'Page sections',
            of: [
                defineArrayMember({type: 'hero'}),
                defineArrayMember({type: 'textSection'})
            ]
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            description: 'This description populates meta-tags on the webpage',
            fieldset: 'metadata'
        }),
        defineField({
            name: 'openGraphImage',
            type: 'image',
            title: 'Open Graph Image',
            description: 'Image for sharing previews on social media',
            fieldset: 'metadata',
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'openGraphImage'
        }
    }
})