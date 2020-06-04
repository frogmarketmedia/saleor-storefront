import { Formik } from "formik";
import React from "react";
import { TextField } from "../TextField";

import { Button, ButtonLink } from "@components/atoms";
import * as S from "./styles";

export const AccountUpdateForm: React.FC<{
  handleSubmit: (data: any) => void;
  hide: () => void;
  initialValues: {
    firstName: string;
    lastName: string;
  };
}> = ({ handleSubmit, hide, initialValues }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit({
            firstName: values.firstName,
            lastName: values.lastName,
          });
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          isSubmitting,
          isValid,
        }) => {
          return (
            <S.Form onSubmit={handleSubmit} data-test="accountUpdateForm">
              <S.ContentEditOneLine>
                <S.ContentExtendInput>
                  <TextField
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </S.ContentExtendInput>
                <S.ContentExtendInput>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </S.ContentExtendInput>
              </S.ContentEditOneLine>
              <S.FormButtons>
                <ButtonLink testingContext="cancelButton" type="button" color="secondary" onClick={hide}>
                  Cancel
                </ButtonLink>
                <Button
                  testingContext="submitButton"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  size="sm"
                >
                  Save
                </Button>
              </S.FormButtons>
            </S.Form>
          );
        }}
      </Formik>
    </>
  );
};
