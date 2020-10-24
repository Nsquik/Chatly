import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { API_KEY } from "@env";
import { Socket as PhoenixSocket } from "phoenix";

const phoenixSocket = new PhoenixSocket("ws://localhost:4000/socket", {
  params: () => {
    if (API_KEY) {
      return { token: API_KEY };
    } else {
      return {};
    }
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

export const wsLink = createAbsintheSocketLink(absintheSocket);
