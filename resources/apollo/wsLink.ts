import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { API_KEY, WSS_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PhoenixSocket from "./socket";

const phoenixSocket = new PhoenixSocket(WSS_URL, {
  params: () => {
    if (API_KEY) {
      return { token: API_KEY };
    } else {
      return { token: AsyncStorage.getItem("token") };
    }
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

export const wsLink = createAbsintheSocketLink(absintheSocket);
