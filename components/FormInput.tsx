import { Input, InputProps, Text } from "@ui-kitten/components";
import React from "react";

export interface Props extends InputProps {
  value: any;
  onChangeText: any;
  errors: any;
  touched: any;
  name: string;
}

const FormInput: React.FC<Props> = ({
  name,
  value,
  onChangeText,
  errors,
  touched,
  ...rest
}) => {
  return (
    <>
      <Input value={value} onChangeText={onChangeText(name)} {...rest} />
      {errors[name] && touched[name] && (
        // eslint-disable-next-line react/jsx-no-undef
        <Text status="danger" appearance="hint">
          {errors[name]}
        </Text>
      )}
    </>
  );
};

export default FormInput;
