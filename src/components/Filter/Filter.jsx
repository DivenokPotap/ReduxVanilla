import { changeFilter } from "@/redux/actions";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter.filter)
  
  const formik = useFormik({
      initialValues: {
        text: filter,
      },
    onSubmit: (values) => {
     dispatch(changeFilter(values.text));
    },
    });
  

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="text">Filter</label>
      <input type="text" id="text" name="text" onChange={formik.handleChange} value={formik.values.text} />
      <button type="submit">Submit</button>
    </form>
  )
  
};

export default Filter;