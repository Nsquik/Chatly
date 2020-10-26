import { ApolloProvider } from "@apollo/client";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider as KittenProvider,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import Toast from "react-native-toast-message";

import { client } from "./apollo";
import ChatRoomProvider from "./contexts/chatroom";

export interface Props {}

const GlobalProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApolloProvider client={client}>
        <ChatRoomProvider>
          <KittenProvider {...eva} theme={eva.light}>
            {children}
          </KittenProvider>
        </ChatRoomProvider>
      </ApolloProvider>
      <Toast ref={(ref: any) => Toast.setRef(ref)} />
    </>
  );
};

export default GlobalProviders;
