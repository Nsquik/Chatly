import { Formik } from "formik";
import React, { useRef } from "react";
import { View } from "react-native";

export interface Props {
  initialValues: object;
  onSubmit: (values: any, funcs: any) => void;
  children: (formik: any) => any;
  validator: object;
}

const FormHandler: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validator,
  children,
}) => {
  const userInitialValues = useRef(initialValues);

  return (
    <Formik
      validationSchema={validator}
      initialValues={userInitialValues}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <View
            style={{
              width: "85%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children(props)}
          </View>
        );
      }}
    </Formik>
  );
};

export default FormHandler;
