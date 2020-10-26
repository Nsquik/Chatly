import FormInput from "@components/FormInput";
import { Button } from "@ui-kitten/components";
import { FormikProps } from "formik";
import React from "react";
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
