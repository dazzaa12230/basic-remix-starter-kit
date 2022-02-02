import initSeo from 'remix-seo'

const title = 'New Remix App'
const description = 'Your description'

export const { getSeo, getSeoLinks, getSeoMeta } = initSeo({
    title,
    description,
    canonical: '',
    openGraph: {
        type: 'website',
        title,
        description,
    },
})
