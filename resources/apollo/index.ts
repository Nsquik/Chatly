import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_URL, API_KEY } from "@env";

const httpLink = createHttpLink({ uri: API_URL });

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: API_KEY ? `Bearer ${API_KEY}` : "",
  },
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
