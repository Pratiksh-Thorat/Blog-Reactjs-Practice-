import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      user: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: yup.object({
      user: yup.string().required("Please Enter Users Name"),
      email: yup.string().required("Please Enter Email"),
      phone: yup.string().required("Please Enter Phone Number"),
      password: yup
        .string()
        .required("Please Enter Valid Password")
        .min(5, "Minimum 5 Character"),
    }),
    onSubmit: async (values, actions) => {
      await axios.post("http://localhost:5000/signup", values);
      actions.resetForm();
      alert("User Signup Successfully!!!");
      history.push("/login");
    },
  });
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-3">
            <div className="card">
              <div className="card-header alert alert-warning text-center">
                SignUp
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="user"
                    className="form-control"
                    placeholder="User Name"
                    value={formik.values.user}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="User Mail"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="User Contact Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <br />
                  <input
                    type="checkbox"
                    name="check"
                    className="form-input-check"
                  />
                  <span>Remember Password</span>
                  <br /> <br />
                  <button className="btn btn-primary w-100">Signup</button>
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
