import React from 'react'
import PropTypes from 'prop-types'
import {PortableText} from '@portabletext/react'
import { TypedObject } from 'sanity'

interface Props {
    blocks: TypedObject[]
}
function SimpleBlockContent({blocks}: Props) {

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return (
    <PortableText
      value={blocks}
    />
  )
}


export default SimpleBlockContent
