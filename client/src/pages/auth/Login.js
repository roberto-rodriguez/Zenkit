import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as authActions from "./auth.actions";
import NavBar from "../common/cmp/NavBar";
import { TextField } from "../common/fields/";
import { reduxForm, Field } from "redux-form";

const formFields = [
  { name: "username", label: "Username" },
  { name: "password", label: "Password", type: "password" }
];
class Login extends Component {
  state = {
    invalidCredentials: false
  };

  onLogin = () => {
    const { login, history, values } = this.props;

    login(history, values, () => {
      this.setState({ invalidCredentials: true });

      setTimeout(() => this.setState({ invalidCredentials: false }), 2000);
    });
  };

  render() {
    const { invalidCredentials } = this.state;
    return (
      <div className="grey lighten-5">
        <NavBar transparent />
        <div className={"login-bck"}>
          <div
            className="row centered"
            style={{
              minWidth: "100%",
              minHeight: "100%",
              display: "flex"
            }}
          >
            <div
              className="col s6 m4 l3 centered"
              style={{
                backgroundColor: "white",
                height: 260
              }}
            >
              <form onSubmit={this.props.handleSubmit(this.onLogin)}>
                {formFields.map(({ label, name }) => (
                  <Field
                    key={name}
                    component={TextField}
                    type="text"
                    label={label}
                    name={name}
                  />
                ))}

                {invalidCredentials && (
                  <div className="red-text centered">
                    Invalid Login Credentials
                  </div>
                )}
                <br />
                <button
                  type="submit"
                  className="teal btn-flat white-text centered"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = label + " is required";
    }
  });

  return errors;
}

const mapStateToProps = ({ form }, ownProps) => {
  return {
    values: form.loginForm && form.loginForm.values
  };
};

export default reduxForm({
  validate: validate,
  form: "loginForm",
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    authActions
  )(withRouter(Login))
);
