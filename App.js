import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Routes } from './src/Routes'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAgile } from "@agile-ts/react";


// const httpLink = createHttpLink({
//   uri: 'https://graphql-camara-deputados.herokuapp.com/',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   let tok = useAgile(Token)
//   const token = tok
//   console.log("token", token)
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });


// // Initialize Apollo Client
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}
const client = new ApolloClient({
  uri: 'https://graphql-camara-deputados.herokuapp.com/',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});



export default function App() {
  return (  
    <ApolloProvider client={client}>
      <Routes />    
    </ApolloProvider>
  );
}


