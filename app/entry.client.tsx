import { CacheProvider } from '@emotion/react'
import { useState } from 'react'
import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import ClientStyleContext from './context/context.client'
import createEmotionCache from './libs/createEmotionCache'
import { ChildrenProps } from './types/children'

function ClientCacheProvider({ children }: ChildrenProps) {
    const [cache, setCache] = useState(createEmotionCache())

    function reset() {
        setCache(createEmotionCache())
    }

    return (
        <ClientStyleContext.Provider value={{ reset }}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    )
}

hydrate(
    <ClientCacheProvider>
        <RemixBrowser />
    </ClientCacheProvider>,
    document,
)
