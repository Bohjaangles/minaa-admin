import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client';

// Components and Providers
import App from './App';
import { UserSidebarContextProvider } from './context/userContext';
import { ReportSidebarContextProvider } from './context/reportContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <UserSidebarContextProvider>
        <ReportSidebarContextProvider>
          <App />
        </ReportSidebarContextProvider>
      </UserSidebarContextProvider>
    </ApolloProvider>
  </BrowserRouter>
);


