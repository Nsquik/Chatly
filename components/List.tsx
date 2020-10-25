import ListItem from "@components/ListItem";
import { IUserRoom } from "@type/models";
import { Divider, List as KittenList } from "@ui-kitten/components";
import React from "react";

export interface Props {
  data: IUserRoom[];
}

const List: React.FC<Props> = ({ data }) => {
  return (
    <KittenList
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={ListItem}
    />
  );
};

export default List;
