import ListItem from "@components/ListItem";
import { IUserRoom } from "@type/models";
import { Divider, List as KittenList } from "@ui-kitten/components";
import React from "react";

export interface Props {
  data: IUserRoom[] | undefined;
}

const List: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <KittenList
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={(props) => <ListItem {...props} />}
    />
  );
};

export default List;
