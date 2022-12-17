import React, { ReactElement } from 'react'
import * as SectionComponents from '../components/sections'
import capitaliseString from '../utils/capitalise-string';

function resolveSections(section: any) {
    const Section = SectionComponents[capitaliseString(section._type)]
    
    if (!Section) {
        console.error('Cant find section')
    }
    return Section

}

const RenderSections = ({ sections }: any) => {

    if (!sections) {
        console.error('Missing sections');
        return <div className="text-7xl bg-red-500 text-white">Missing sections</div>
    }
    return (
        <>
        {sections.map((section, i) => {
            const SectionComponent = resolveSections(section)
            if (!SectionComponent) {
                return <div key={i}>Missing section {section._type}</div>
            }
            // console.log('section', section)
                return <SectionComponent {...section} key={section._key}/>
        })}
        </>
    )
  return (
    <div>RenderSections</div>
  )
}

export default RenderSections