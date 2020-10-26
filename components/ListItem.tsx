import { useNavigation } from "@react-navigation/native";
import { IUserRoom } from "@type/models";
import { ListItem as KittenItem, Icon, IconProps } from "@ui-kitten/components";
import React from "react";

export interface Props {
  item: IUserRoom;
  index: number;
}

const renderItemIcon = (props: IconProps, fill?: string) => (
  <Icon {...props} name="arrow-circle-right-outline" fill="#FF3D71" />
);

const ListItem: React.FC<Props> = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <KittenItem
      title={`${item.name}`}
      accessoryLeft={(props) => renderItemIcon(props)}
      onPress={() =>
        navigation.navigate("ChatRoom", {
          roomId: item.id,
          roomName: item.name,
        })
      }
    />
  );
};

export default ListItem;
