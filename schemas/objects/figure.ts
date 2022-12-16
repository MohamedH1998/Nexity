import { defineField, defineType } from "sanity"

export default defineType({
    name: 'figure',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            title: 'Caption',
            name: 'caption',
            type: 'string',
            options: {
                isHighlighted: true
            }
        }),
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'Important for accessibility and SEO',
            options: {
                isHighlighted: true
            }
        })
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption'
        }
    }
})