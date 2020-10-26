import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useCallback } from "react";

export const useStorage = () => {
  const [token, setToken] = useState<string | null>(null);

  const fetchToken = useCallback(() => {
    AsyncStorage.getItem("token").then((token) => {
      token && setToken(token);
    });
  }, []);

  useEffect(() => {
    fetchToken();
  }, []);

  const removeToken = useCallback(() => {
    AsyncStorage.removeItem("token").then(() => {
      setToken(null);
    });
  }, []);

  return { token, fetchToken, removeToken };
};
