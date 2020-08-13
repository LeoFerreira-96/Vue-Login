import {ApolloClient, HttpLink, inMemoryCache } from 'apollo-boost'

const link = new HttpLink({
    uri: 'https://api.supercrm.ezdevs.com.br/'
})

const apollo = new ApolloClient({
    link,
    cache: new inMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== 'prodution'
})

export default apollo