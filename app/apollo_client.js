import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const link = createHttpLink({
  uri: 'http://lvh.me:3000/shasta/graphql'
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link,
  cache
})

export default client
