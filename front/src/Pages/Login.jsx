import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Enter Valid Email"),
      password: yup.string().required("Enter correct Password"),
    }),
    onSubmit: async (values) => {
      const { data } = await axios.get("http://localhost:5000/signup");
      console.log(data);
      alert("Login", values);
      history.push("/addblog");
    },
  });
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="card">
              <form onSubmit={formik.handleSubmit}>
                <div className="card-header text-center alert-warning">
                  Login Page
                </div>
                <div className="card-body">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <button className="btn btn-success w-100">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
