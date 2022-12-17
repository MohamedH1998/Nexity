import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import '../../styles/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const query = await groq`*[_type=='site-config']{lang}[0].lang`
  const lang = await client.fetch(query);


  return (
    <html lang={lang || 'en'}>
      <body>
        {children}
        </body>
    </html>
  )
}
