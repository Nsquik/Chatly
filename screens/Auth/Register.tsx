import { useMutation } from "@apollo/client";
import FormHandler from "@components/FormHandler";
import FormInput from "@components/FormInput";
import { StyledLayout as Layout } from "@components/Layout";
import { REGISTER } from "@queries/auth";
import { Button, Text } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { FormikProps } from "formik";
import React from "react";
import Toast from "react-native-toast-message";
import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup.string().required("Password is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("First Name is required"),
  passwordConfirmation: yup.string().required("Password is required"),
});

export const registerInitialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  passwordConfirmation: "",
};

export interface Props {
  formik: FormikProps<typeof registerInitialValues>;
}

export const RegisterFields: React.FC<Props> = ({ formik }) => {
  const {
    values: { email, password, passwordConfirmation, firstName, lastName },
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
        style={{ paddingBottom: 5 }}
        errors={errors}
        touched={touched}
        name="password"
        secureTextEntry
      />
      <FormInput
        label="Confirm Password"
        placeholder="confirm password"
        value={passwordConfirmation}
        onChangeText={handleChange}
        style={{ paddingBottom: 5 }}
        errors={errors}
        touched={touched}
        name="passwordConfirmation"
        secureTextEntry
      />
      <FormInput
        placeholder="first name"
        value={firstName}
        label="First Name"
        onChangeText={handleChange}
        style={{ paddingBottom: 5 }}
        errors={errors}
        name="firstName"
        touched={touched}
      />
      <FormInput
        placeholder="last name"
        value={lastName}
        label="Last Name"
        onChangeText={handleChange}
        style={{ paddingBottom: 5 }}
        errors={errors}
        name="lastName"
        touched={touched}
      />

      <Button
        appearance="outline"
        status="danger"
        style={{ marginTop: 20 }}
        onPress={() => formik.handleSubmit()}
      >
        Register
      </Button>
    </>
  );
};

const RegisterScreen = () => {
  const [register, { loading }] = useMutation(REGISTER, {
    onCompleted: async () => {
      Toast.show({
        type: "success",
        text1: "Successfuly registered!",
        text2: "You may log in now!",
        position: "bottom",
      });
    },
    onError: (error) => {
      Toast.show({ type: "error", text1: error.message, position: "bottom" });
    },
  });
  const registerOnSubmit = ({
    password,
    email,
    firstName,
    lastName,
    passwordConfirmation,
  }: any) => {
    register({
      variables: { password, email, firstName, lastName, passwordConfirmation },
    });
  };
  return (
    <Layout
      level="1"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <FormHandler
        initialValues={registerInitialValues}
        onSubmit={async (values, { resetForm }) => {
          await registerOnSubmit(values);
          resetForm();
        }}
        validator={registerValidationSchema}
      >
        {(formik) => {
          return <RegisterFields formik={formik} />;
        }}
      </FormHandler>
      {loading && <Text status="warning">Registering, please wait...</Text>}
      <StatusBar style="auto" />
    </Layout>
  );
};

export default RegisterScreen;
