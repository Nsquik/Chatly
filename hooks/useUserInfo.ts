import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "@queries/user";
import { IUser } from "@type/models";
import { useCallback } from "react";

export const useUserInfo = () => {
  const { data, loading } = useQuery<{ user: IUser }>(GET_USER_INFO);

  const getFullName = useCallback(() => {
    return data && !loading && `${data?.user.firstName} ${data?.user.lastName}`;
  }, [data]);

  return { data, loading, getFullName };
};
