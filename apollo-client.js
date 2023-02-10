import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.NEXT_PUBLIC_CLIENT_URI,
  headers: {
    Authorization: `Apikey ${import.meta.NEXT_PUBLIC_API_KEY}`
  },
  cache: new InMemoryCache(),
});

export default client;
