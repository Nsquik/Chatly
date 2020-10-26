import { useTheme } from "@ui-kitten/components";
import React from "react";
import { Bubble } from "react-native-gifted-chat";

const ChatBubble = (props: any) => {
  const theme = useTheme();

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: { backgroundColor: theme["color-danger-500"] },
      }}
    />
  );
};

export default ChatBubble;
