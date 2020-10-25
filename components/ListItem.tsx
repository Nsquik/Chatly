import { IUserRoom } from "@type/models";
import {
  ListItem as KittenItem,
  Icon,
  IconProps,
  ListItemProps,
} from "@ui-kitten/components";
import React from "react";

export interface Props {
  item: IUserRoom;
  index: number;
}

const renderItemIcon = (props: IconProps) => (
  <Icon {...props} name="arrow-circle-right-outline" />
);

const ListItem: React.FC<Props> = ({ item, index }) => {
  return <KittenItem title={`${item.name}`} />;
};

export default ListItem;
