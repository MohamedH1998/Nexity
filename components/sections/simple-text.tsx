import React from 'react'
import { TypedObject } from 'sanity';
import SimpleBlockContent from '../objects/simple-text';

interface Props {
    heading?: string;
    label?: string;
    text?: TypedObject[]
}
const SimpleText = ({heading, label, text}: Props) => {

    return (
      <div className="bg-pink-50">
        <section className='rounded-5 bg-pink-100'>
          <div className="font-bold text-xm">{label}</div>
          <h2 className="font-bold text-5xl">{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
        </section>
      </div>
    )
}

export default SimpleText