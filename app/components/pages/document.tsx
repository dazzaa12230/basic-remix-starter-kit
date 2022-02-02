import { ChakraProvider } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from 'remix'
import ClientStyleContext from '~/context/context.client'
import ServerStyleContext from '~/context/context.server'
import { ChildrenProps } from '~/types/children'

const Document = withEmotionCache(({ children }: ChildrenProps, emotionCache) => {
    const serverSyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
        // re-link sheet container
        emotionCache.sheet.container = document.head
        // re-inject tags
        const tags = emotionCache.sheet.tags
        emotionCache.sheet.flush()
        tags.forEach((tag) => {
            ;(emotionCache.sheet as any)._insertTag(tag)
        })
        // reset cache to reapply global styles
        clientStyleData.reset()
    }, [])

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
                {serverSyleData?.map(({ key, ids, css }) => (
                    <style
                        key={key}
                        data-emotion={`${key} ${ids.join(' ')}`}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: css }}
                    />
                ))}
            </head>
            <body>
                <ChakraProvider>{children}</ChakraProvider>
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    )
})

export default Document
