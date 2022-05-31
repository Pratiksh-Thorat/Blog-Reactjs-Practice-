import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddBlog() {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      author: "",
      img: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("enter something"),
      desc: yup.string().required("enter something"),
      author: yup.string().required("enter something"),
      img: yup.string().required("enter something"),
    }),
    onSubmit: async (values, actions) => {
      await axios.post("http://localhost:5000/blog", values);
      actions.resetForm();
    },
  });
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="card">
              <div className="card-header text-center alert-primary">
                Add New Blog
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Description"
                    className="form-control"
                    name="desc"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Author"
                    className="form-control"
                    name="author"
                    onChange={formik.handleChange}
                    value={formik.values.author}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Img"
                    className="form-control"
                    name="img"
                    onChange={formik.handleChange}
                    value={formik.values.img}
                  />
                  <br />
                  <button className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
