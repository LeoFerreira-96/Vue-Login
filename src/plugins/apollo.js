import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const AUTH_TOKEN = 'apollo-token'

const onLogin = async (apollo, token) => {
    if (typeof window.localStorage !== 'undefined' && token) {
        window.localStorage.setItem(AUTH_TOKEN, token)
    }else{
        console.log('nao esta vazia', window.localStorage)
    }
}
const httpLink = createHttpLink({
    uri: 'https://api.supercrm.ezdevs.com.br/'
})

export const apollo = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export {
    AUTH_TOKEN,
    onLogin
}