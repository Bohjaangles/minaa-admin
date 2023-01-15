import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   gql 
  } from '@apollo/client';

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);


