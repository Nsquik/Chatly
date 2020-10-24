import { ApolloClient, InMemoryCache } from "@apollo/client";

import { authLink, httpLink } from "./httpLink";

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
