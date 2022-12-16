import React, { ReactNode } from 'react'
import { defineType } from 'sanity'

interface Props {
    children: ReactNode
}

const InternalLinkRender = ({children}: Props) => <span>{children}</span>

export default defineType({
    title: 'Internal link to another document',
    name: 'internalLink',
    type: 'reference',
    description: 'Locate a document you want to link to',
    to: [{type: 'page'}, {type: 'route'}],
    // blockEditor: {
    //     icon: () => '🔗',
    //     render: InternalLinkRender
    // }
})