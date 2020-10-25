import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_URL, API_KEY } from "@env";

export const httpLink = createHttpLink({ uri: API_URL });

export const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: API_KEY ? `Bearer ${API_KEY}` : "",
  },
}));
