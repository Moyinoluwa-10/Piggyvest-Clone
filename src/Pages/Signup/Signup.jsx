import React, { useEffect } from "react";
import "../Login/Login.css";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoWhite from "../../Assets/Svg/LogoWhite.svg";

const Signup = () => {
  useEffect(() => {
    document.title = "PiggyVest | Dashboard";
  }, []);

  const validate = (values) => {
    const errors = {};
    // fullname
    if (!values.fullName) {
      errors.fullName = "Please fill out this field";
    } else if (values.fullName.length < 5) {
      errors.fullName = "Must be 5 characters or more";
    }
    // email
    if (!values.email) {
      errors.email = "Please fill out this field";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    // phoneno
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(values.phoneNo)) {
      errors.phoneNo = "Please enter only number.";
    } else if (values.phoneNo.length !== 11) {
      errors.phoneNo = "Please enter valid phone number.";
    }
    // password
    if (!values.password) {
      errors.password = "Please fill out this field";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Password must not be 12345678!!!";
    }

    // referrer

    // if (!pattern.test(values.referrer)) {
    //   errors.referrer = "Please enter only number.";
    // } else if (values.referrer.length !== 10 || values.referrer.length > 6) {
    //   errors.referrer = "Please enter valid referal phone number or code.";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNo: "",
      password: "",
      referrer: "",
      referralSource: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        toast.success(JSON.stringify(values, null, 2), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        resetForm({ values: "" });
      }, 500);
    },
  });

  return (
    <div className="signUp flex " style={{ overflow: "auto" }}>
      <Link className="header flex" to="/">
        <img src={LogoWhite} alt="" />
      </Link>
      <div className="login flex">
        <div className="formHead">
          <h1>Create a Secure Account</h1>
          <p>Welcome to the future of Savings & Investments</p>
        </div>
        <form className="flex" onSubmit={formik.handleSubmit}>
          <div className="formGroup flex">
            <label className="label" htmlFor="fullName">
              Full Name
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.fullName}
              onBlur={formik.handleBlur}
              className="input"
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="error">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="input"
              type="email"
              name="email"
              required
              placeholder="Email Address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.phoneNo}
              onBlur={formik.handleBlur}
              className="input"
              type="tell"
              maxLength={11}
              name="phoneNo"
              required
              placeholder="Phone Number"
            />
            {formik.touched.phoneNo && formik.errors.phoneNo ? (
              <div className="error">{formik.errors.phoneNo}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="input"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="referrer">
              Referrer Phone or Promo Code (Optional)
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.referrer}
              onBlur={formik.handleBlur}
              className="input"
              type="tel"
              name="referrer"
              placeholder="Referrer Phone or Code"
            />
            {formik.touched.referrer && formik.errors.referrer ? (
              <div className="error">{formik.errors.referrer}</div>
            ) : null}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="referralSource">
              How Did You Hear About Us? (Optional)
            </label>
            <select
              onChange={formik.handleChange}
              value={formik.values.referralSource}
              onBlur={formik.handleBlur}
              name="referralSource"
              className="referralSource"
            >
              <option className="referralSourceOpt" label="Click To Select">
                Click To Select
              </option>
              <option
                className="referralSourceOpt"
                value="Facebook"
                label="Facebook"
              >
                Facebook
              </option>
              <option
                className="referralSourceOpt"
                value="Twitter"
                label="Twitter"
              >
                Twitter
              </option>
              <option
                className="referralSourceOpt"
                value="Instagram"
                label="Instagram"
              >
                Instagram
              </option>
              <option
                className="referralSourceOpt"
                value="Frienda/Family/Coworker Referral"
                label="Frienda/Family/Coworker Referral"
              >
                Frienda/Family/Coworker Referral
              </option>
              <option
                className="referralSourceOpt"
                value="Google Search"
                label="Google Search"
              >
                Google Search
              </option>
              <option
                className="referralSourceOpt"
                value="Google PlayStore"
                label="Google PlayStore"
              >
                Google PlayStore
              </option>
              <option
                className="referralSourceOpt"
                value="Online Blog"
                label="Online Blog"
              >
                Online Blog
              </option>
              <option
                className="referralSourceOpt"
                value="Local Newspaper"
                label="Local Newspaper"
              >
                Local Newspaper
              </option>
              <option
                className="referralSourceOpt"
                value="At An Event"
                label="At An Event"
              >
                At An Event
              </option>
              <option className="referralSourceOpt" value="Other" label="Other">
                Other
              </option>
            </select>
          </div>
          <button className="button" type="submit">
            CREATE ACCOUNT
          </button>
        </form>
      </div>

      <Link to="/login" className="footLink">
        Already have an account? Log In
      </Link>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Signup;
