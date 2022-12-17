import { defineField, defineType, PreviewConfig } from "sanity"

export default defineType({
    name: 'simpleText',
    title: 'Text',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
            title: 'Label'
        }),
        defineField({
            name: 'heading',
            type: 'string',
            title: 'Heading'
        }),
        defineField({
            name: 'text',
            type: 'blockText'
        })
    ],
    preview: {
        select: {
            heading: 'heading'
        },
        prepare({heading}: {heading: PreviewConfig<{ heading: string; }, Record<"heading", any>>}) {
            return {
                title: `${heading}`,
                subtitle: 'Simple text section'
            }
        }
    }
})