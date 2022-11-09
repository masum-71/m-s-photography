import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/UseTitle";

const Login = () => {
  useTitle("Login");
  const { login, loginWithGoogle } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="card  w-full shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            <Link className="btn">
              <button onClick={handleGoogleLogin}>Login with Google</button>
            </Link>
          </p>
          <p className="text-center mb-4">
            New to M'sPhotography ?{" "}
            <Link to="/signup" className="text-blue-600 font-bold">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
