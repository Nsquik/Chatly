import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";

export const useStorage = () => {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = useCallback(() => {
    AsyncStorage.getItem("token").then((token) => {
      token && setToken(token);
    });
  }, [setToken]);

  useEffect(() => {
    fetchToken();
  }, []);

  const setTokenCb = useCallback(
    (token: string) => {
      AsyncStorage.setItem("token", token).then(() => {
        setToken(token);
      });
    },
    [setToken]
  );

  const removeToken = useCallback(() => {
    AsyncStorage.removeItem("token").then(() => {
      setToken(null);
    });
  }, [setToken]);

  return { token, fetchToken, removeToken, setTokenCb };
};
