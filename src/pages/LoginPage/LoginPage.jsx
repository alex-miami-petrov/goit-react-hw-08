import { Field, Formik, Form } from "formik";
import React from "react";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { motion } from "framer-motion";
import { slideInFromRight } from "../../components/motion";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight()}
    >
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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

          <button type="submit" className={s.logBtn}>
            Log In
          </button>
        </Form>
      </Formik>
    </motion.div>
  );
};

export default LoginPage;
