import { ApolloProvider } from "@apollo/client";
import React from "react";

import { client } from "./apollo";

export interface Props {}

const AllProviders: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AllProviders;
