import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to Homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="main-content">


      <div className="containme bg-red bg-ellipses">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-10 col-xl-8">
                    <h1 className="display-3 text-center text-white">Sign In</h1>
                  </div>
                </div>
              </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-n7">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-12 px-4 py-3 order-lg-1">
                   <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      placeholder="example@college.edu"
                      className={classnames("form-control", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                    <span className="invalid-feedback">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
                  </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Password</label>
                  </div>
                </div>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className={classnames("form-control form-control-appended", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary mb-3"
              >
                Sign in
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet? <Link to="/register">Sign up</Link>
                  .
                </small>
              </div>
            </form>
   
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
