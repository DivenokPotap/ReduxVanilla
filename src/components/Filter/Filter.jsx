import { changeFilter } from "@/redux/filterSlice";
import { getCurrentFilter } from "@/redux/selectors";
import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getCurrentFilter)

  return (
    <Formik
      initialValues={{
        text: filter,
      }}
    >
      {({ handleChange }) => (
        <Form>
          <label htmlFor="text">Filter</label>
          <Field type="text" id="text" name="text" placeholder="Впишіть фільтер" onChange={(event) => {
            handleChange(event);
            dispatch(changeFilter(event.target.value))
          }} />
        </Form>
      )}
</Formik >
);
};

export default Filter;