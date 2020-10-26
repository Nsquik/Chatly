import { StyledLayout as Layout } from "@components/Layout";
import List from "@components/List";
import UserBottomTab from "@components/UserBottomTab";
import { useListRooms } from "@hooks/useListRooms";
import { StatusBar } from "expo-status-bar";
import React from "react";

export interface Props {}

const ListRooms: React.FC<Props> = ({}) => {
  const { data } = useListRooms();
  return (
    <Layout level="1">
      <List data={data?.usersRooms.rooms} />
      <UserBottomTab />
      <StatusBar style="auto" />
    </Layout>
  );
};

export default ListRooms;
