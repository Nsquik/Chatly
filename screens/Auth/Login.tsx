import { useMutation } from "@apollo/client";
import FormHandler from "@components/FormHandler";
import FormInput from "@components/FormInput";
import { StyledLayout as Layout } from "@components/Layout";
import { useStorageState } from "@hooks/useStorageState";
import { LOGIN } from "@queries/auth";
import { Button, Text } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { FormikProps } from "formik";
import React from "react";
import Toast from "react-native-toast-message";
import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup.string().required("Password is required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export interface Props {
  formik: FormikProps<typeof loginInitialValues>;
}

export const LoginFields: React.FC<Props> = ({ formik }) => {
  const {
    values: { email, password },
    errors,
    touched,
    handleChange,
  } = formik;

  return (
    <>
      <FormInput
        placeholder="email"
        value={email}
        label="E-mail"
        onChangeText={handleChange}
        style={{ paddingBottom: 5 }}
        errors={errors}
        name="email"
        touched={touched}
      />

      <FormInput
        label="Password"
        placeholder="password"
        value={password}
        onChangeText={handleChange}
        errors={errors}
        touched={touched}
        name="password"
        secureTextEntry
      />

      <Button
        appearance="outline"
        status="primary"
        style={{ marginTop: 20 }}
        onPress={() => formik.handleSubmit()}
      >
        Log In
      </Button>
    </>
  );
};

const LoginScreen = () => {
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

export default LoginScreen;
