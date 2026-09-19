import { changeFilter } from "@/redux/actions";
import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter.filter)
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