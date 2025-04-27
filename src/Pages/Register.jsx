import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../provider/AuthProvider"

const Register = () => {

  const {createNewUser,user,setUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({name,email,photo,password});

    createNewUser(email,password)
    .then((result) =>{
      const user = result.user;
      setUser(user);
      // console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    })
  }
    return (
        <div className="min-h-screen flex justify-center items-center ">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none">
          <h2 className="text-2xl font-semibold text-center mt-10">Register your account</h2>
          <div onSubmit={handleSubmit} className="card-body">
            <form className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" />
            
            <label className="label">Photo URL</label>
              <input name='photo' type="text" className="input" placeholder="Photo URL" />

              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input name='password'
                type="password"
                className="input"
                placeholder="Password"
               
              />
             
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>



          <p className="text-center font-semibold mb-5">
              Already Have An Account? <Link className="text-red-500" to="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    );
};

export default Register;