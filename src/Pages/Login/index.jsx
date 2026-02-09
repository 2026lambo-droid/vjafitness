import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";
import { fitnessImages } from "../../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      setPassword("");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear error and log the data
    setError("");
    console.log({ email, password, remember });

    // Simulate login API call
    alert("Login successful!");
  };

  pageTitle("Login | VJAFitness");

  return (
    <div className="cs_card cs_style_10">
      <div className="cs_card_left">
        <div className="cs_card_card_out">
          <Link to="/" className="cs_login_logo">
            <img src="/assets/img/logo.svg" alt="VJAFitness" />
          </Link>
          <div className="cs_card_card_in">
            <h1 className="cs_section_title cs_fs_32 cs_bold cs_medium cs_mb_30">
              Login with your account
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="cs_mb_15">
                <label>Email*</label>
                <input
                  type="email"
                  className="cs_form_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="cs_mb_15">
                <label>Password*</label>
                <input
                  type="password"
                  className="cs_form_field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="cs_card_row_1 cs_mb_15">
                <div className="cs_custom_checkbox">
                  <input
                    className="cs_custom_checkbox_input"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="cs_custom_checkbox_label">
                    Remember me
                  </label>
                </div>

                <div>
                  <Link to="/forgot-password" className="cs_card_text_btn">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              {error && (
                <div className="cs_error_message cs_mb_15">
                  <p>{error}</p>
                </div>
              )}
              <div className="cs_mb_20">
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                >
                  <b>Login</b>
                </button>
              </div>
              <p className="cs_mb_20 cs_or_login">
                <span>Or login with</span>
              </p>
              <div className="cs_social_btns cs_mb_20">
                <Link
                  to="/auth/facebook"
                  className="cs_social_btn cs_social_btn_facebook"
                >
                  <i className="d-flex">
                    <Icon icon="fa6-brands:facebook" width="16" height="16" />
                  </i>
                  Login With Facebook
                </Link>
                <Link
                  to="/auth/google"
                  className="cs_social_btn cs_social_btn_google"
                >
                  <i className="d-flex">
                    <Icon icon="fa6-brands:google" width="16" height="16" />
                  </i>
                  Login With Google
                </Link>
              </div>
              <p className="mb-0 cs_primary_color">
                Don't have an account?{" "}
                <Link to="/signup" className="cs_card_text_btn">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div
        className="cs_card_right cs_bg_filed"
        style={{
          backgroundImage: `url(${fitnessImages.loginBg})`,
        }}
      />
    </div>
  );
}

export default Login;
