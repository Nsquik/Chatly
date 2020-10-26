import { StorageContext } from "@res/contexts/storage";
import { useContext } from "react";

export const useStorageState = () => {
  const context = useContext(StorageContext);

  if (context === undefined) {
    throw new Error("useChatroomState must be used within a ChatRoomProvider");
  }

  return context;
};
