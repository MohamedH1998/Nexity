import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
    title: 'Hero',
    name: 'hero',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading'
        }),
        defineField({
            name: 'tagline',
            type: 'blockText',
            title: 'Tagline'
        }),
        defineField({
            name: 'backgroundImage',
            type: 'image',
            title: 'Background image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'ctas',
            type: 'array',
            title: 'Call to actions',
            of: [
                defineArrayMember({
                    type: 'cta',
                    title: 'Call to action'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage'
        },
        prepare({title, media}: any) {
            return {
                title,
                subtitle: 'Hero section',
                media
            }
        }
    }
})