import Link from 'next/link';
import React from 'react'

interface Props {
    title: string;
    route: {slug: {current: string}};
    link: string
}
const Cta = ({title, route, link}: Props) => {
    if (route && route.slug && route.slug.current) {
        console.log(route.slug)
        return (
                <Link className="inline-block font-xl px-3 py-3 bg-grim-reaper hover:bg-light-grim-reaper text-white font-light text-md sm:text-lg md:text-2xl md:px-5 md:py-5" href={`${route.slug.current === '/' ? '/' : route.slug.current}`}>
                    {title}
                </Link>
        )
    }
    if (link) {
        return (
            <a href={link}className="font-xl px-3 py-3 bg-grim-reaper hover:bg-light-grim-reaper text-white font-light text-md sm:text-lg md:text-2xl md:px-5 md:py-5" target="_blank">
                {title}
            </a>
        )
    }
  return (
    <button
    className="font-xl px-3 py-3 bg-grim-reaper hover:bg-light-grim-reaper text-white font-light text-md sm:text-lg md:text-2xl md:px-5 md:py-5"
  >
    {title}
  </button>
  )
}

export default Cta