import { Global } from '@emotion/react'
import { LinksFunction, MetaFunction, Outlet } from 'remix'
import Document from './components/pages/document'
import { getSeo } from './seo'
import globalStyles from './styles/global'

let [seoMeta, seoLinks] = getSeo()

export let meta: MetaFunction = () => ({ ...seoMeta })
export let links: LinksFunction = () => [
    ...seoLinks,
    {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
]

export default function App() {
    return (
        <Document>
            <Global styles={globalStyles} />
            <Outlet />
        </Document>
    )
}
