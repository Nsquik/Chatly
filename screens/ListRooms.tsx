import { StyledLayout as Layout } from "@components/Layout";
import List from "@components/List";
import { useListRooms } from "@hooks/useListRooms";
import { IUserRoom } from "@type/models";
import { StatusBar } from "expo-status-bar";
import React from "react";

export interface Props {}

const ListRooms: React.FC<Props> = ({}) => {
  const { data } = useListRooms();
  return (
    <Layout level="3">
      <List data={data?.usersRooms.rooms} />
      <StatusBar style="auto" />
    </Layout>
  );
};

export default ListRooms;
