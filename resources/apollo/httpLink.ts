import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const httpLink = createHttpLink({
  uri: API_URL,
});

export const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
