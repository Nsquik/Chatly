import { useMutation } from "@apollo/client";
import FormHandler from "@components/FormHandler";
import { StyledLayout as Layout } from "@components/Layout";
import { useStorageState } from "@hooks/useStorageState";
import { LOGIN } from "@queries/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Toast from "react-native-toast-message";

import {
  LoginFields,
  loginInitialValues,
  loginValidationSchema,
} from "./Login";

export interface Props {}

const Auth: React.FC<Props> = ({}) => {
  const { setTokenCb } = useStorageState();

  const [logIn, { loading }] = useMutation(LOGIN, {
    onCompleted: async ({ loginUser: { token } }) => {
      await setTokenCb(token);
      Toast.show({ type: "success", text1: "Logged in!", position: "bottom" });
    },
    onError: (error) => {
      Toast.show({ type: "error", text1: error.message, position: "bottom" });
    },
  });
  const loginOnSubmit = ({ password, email }: any) => {
    logIn({ variables: { password, email } });
  };

  return (
    <Layout
      level="1"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FormHandler
        initialValues={loginInitialValues}
        onSubmit={async (values, { resetForm }) => {
          await loginOnSubmit(values);
          resetForm();
        }}
        validator={loginValidationSchema}
      >
        {(formik) => {
          return <LoginFields formik={formik} />;
        }}
      </FormHandler>
      {loading && <Text status="warning">Logging in, please wait...</Text>}
      <StatusBar style="auto" />
    </Layout>
  );
};

export default Auth;
