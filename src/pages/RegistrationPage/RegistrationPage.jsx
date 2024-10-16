import { Field, Formik, Form } from "formik";
import React from "react";
import s from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <Field className={s.field} id="name" name="name" placeholder="Jane" />
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <Field
            className={s.field}
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <Field
            className={s.field}
            id="password"
            name="password"
            placeholder="password"
            type="password"
          />

          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
