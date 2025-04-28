import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {userLogin,setUser} = useContext(AuthContext);
 const [error,setError] = useState({});
  const location =useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleSubmit =(e)=>{

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email,password});
    userLogin(email,password)
    .then(result=>{
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    })
    .catch((err) => {
     setError({...error, login: err.code});
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
        <h2 className="text-2xl font-semibold text-center mt-10">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {
              error.login && (<label className="label text-sm text-red-500">
               { error.login }
              </label>
              )
            }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center font-semibold mb-5">
          Don't Have An Account?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
