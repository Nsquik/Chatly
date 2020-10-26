import React, { createContext } from "react";

import { useStorage } from "./useStorage";

export const StorageContext = createContext<any | undefined>(undefined);

export interface Props {}

const StorageProvider: React.FC<Props> = ({ children }) => {
  const state = useStorage();
  return (
    <StorageContext.Provider value={state}>{children}</StorageContext.Provider>
  );
};

export default StorageProvider;
