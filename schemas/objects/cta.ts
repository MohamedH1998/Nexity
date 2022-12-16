import { defineField, defineType } from "sanity"


interface PreviewProps {
    title: string,
    routeTitle: string,
    slug: string,
    link: string
}

interface FieldsProps {
    route?: string,
    link?: string
}

export default defineType({
    title: 'Call to action',
    name: 'cta',
    type: 'object',
    validation: (Rule: any) => Rule.custom((fields: FieldsProps = {}) => !fields.route || !fields.link || 'Only one link type is allowed'),
    fieldsets: [
        {
            title: 'link',
            name: 'link'
        }
    ],
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        // defineField({
        //     title: 'Internal link',
        //     description: 'Use this to link between pages on this website',
        //     name: 'route',
        //     type: 'reference',
        //     to: [{type: 'route'}],
        //     fieldset: 'link'
        // }),
        // defineField({
        //     title: 'External link',
        //     name: 'link',
        //     type: 'url',
        //     fieldset: 'link'
        // }),
    ],
    // preview: {
    //     select: {
    //         title: 'title',
    //         routeTitle: 'route.title',
    //         slug: 'route.slug.current',
    //         link: 'link'
    //     },
    //     prepare({title, routeTitle = '', slug, link}: PreviewProps) {
    //         const subtitleExtra = slug ? `Slug:/${slug}/` : link ? `External link ${link}` : 'Not set'
    //         return {
    //             title: `${title}`,
    //             subtitle: `${routeTitle} ${subtitleExtra}`
    //         }
    //     }
    // }
})