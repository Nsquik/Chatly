import { ApolloProvider } from "@apollo/client";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider as KittenProvider,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";

import { client } from "./apollo";

export interface Props {}

const GlobalProviders: React.FC<Props> = ({ children }) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApolloProvider client={client}>
        <KittenProvider {...eva} theme={eva.light}>
          {children}
        </KittenProvider>
      </ApolloProvider>
    </>
  );
};

export default GlobalProviders;
