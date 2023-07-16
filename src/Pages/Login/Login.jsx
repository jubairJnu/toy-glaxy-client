import { Link } from "react-router-dom";


const Login = () => {

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img className="w-96 h-auto" src="https://i.ibb.co/mvwW2cf/image.png" alt="" /> 
     
    </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-5xl text-center p-2 font-bold">Login now!</h1>
        <form onSubmit={handleLogin}>
        <div className="card-body">
                  <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p><small>New to toy glaxy?<Link to="/signup">Sign Up</Link> </small></p>
        </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;