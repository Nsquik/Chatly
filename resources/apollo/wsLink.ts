import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { WSS_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PhoenixSocket from "./socket";

const phoenixSocket = new PhoenixSocket(WSS_URL, {
  params: async () => {
    return {
      token:
        (await AsyncStorage.getItem("token")) ||
        "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjMwMDksImlhdCI6MTYwMzEwMzgwOSwiaXNzIjoiY2hhdGx5IiwianRpIjoiNGY3OWQyZTktZmFlMC00M2ZmLTk4ZTItNGMyYjY0YThmZGM0IiwibmJmIjoxNjAzMTAzODA4LCJzdWIiOiJmZjM2YjFiMS03Y2NhLTQ3OTgtODIyYS1hNWFkODQxNDg1OWIiLCJ0eXAiOiJhY2Nlc3MifQ.m4n1BBqf2fAeu1BM3X2xJZQ8nizAzm7gnEJvXFU3J7m97vXbm6XlOzIMTZakCAC2t_ZteOs_rMt88cLIZXUDjg",
    };
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

export const wsLink = createAbsintheSocketLink(absintheSocket);
