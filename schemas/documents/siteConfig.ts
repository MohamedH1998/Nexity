import {parse} from 'bcp-47'
import { defineArrayMember, defineField, defineType } from 'sanity'


export default defineType({
    name: 'site-config',
    type: 'document',
    title: 'Site configuration',
    fieldsets: [{name: 'footer', title: 'Footer'}],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Site title'
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'URL',
            description: 'The main site url. Used to create canonical url',
        }),
        defineField({
            name: 'frontpage',
            type: 'reference',
            description: 'Choose page to be the frontpage',
            to: {type: 'page'},
        }),
        defineField({
            title: 'Site language',
            description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
            name: 'lang',
            type: 'string',
            validation: (Rule: any) =>
              Rule.custom((lang: string) => (parse(lang) ? true : 'Please use a valid bcp47 code')),
          }),
          defineField({
            name: 'logo',
            title: 'Brand logo',
            type: 'image',
            description: 'Select a brand logo',
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for accessibility and SEO',
                    options: {
                        isHighlighted: true
                    }
                })
            ]
          }),
          defineField({
            name: 'mainNavigation',
            title: 'Main navigation',
            description: 'Select pages for the top menu',
            validation: (Rule: any) => [
                Rule.max(5).error('Please select less than 5 items'),
                Rule.unique().error('You have duplicate menu items')
            ],
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'route'}]
                })
            ]
          }),
          defineField({
            name: 'footerNavigation',
            title: 'Footer navigation items',
            validation: (Rule: any) => [
                Rule.max(5).error('Please select less than 5 items'),
                Rule.unique().error('You have duplicate footer items')
            ],
            type: 'array',
            fieldset: 'footer',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{ type: 'route'}]
                })
            ]

          }),
          {
            name: 'footerText',
            // type: 'simpleText',
            type: 'string',
            fieldset: 'footer'
          }
    ]
})