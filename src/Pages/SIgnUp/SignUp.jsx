import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

  const {signUp} = useContext(AuthContext);

  const handleSignUp=event=>{
    event.preventDefault();
    const form= event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    signUp(email, password)
    .then(result=>{
      const signedUser = result.user;
      console.log(signedUser)
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="text-center lg:text-left">
    <img className="w-96 h-auto" src="https://i.ibb.co/mvwW2cf/image.png" alt="" /> 
    
   </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <h1 className="text-5xl text-center p-2 font-bold">Please Register!</h1>
       <form onSubmit={handleSignUp}>
       <div className="card-body">
                 <div className="form-control">
           <label className="label">
             <span className="label-text">Name</span>
           </label>
           <input type="text" placeholder="name" name="name" className="input input-bordered" />
         </div>
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
           
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Photo Url</span>
           </label>
           <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
           
         </div>
         <div className="form-control mt-6">
           <button className="btn btn-primary">Sign Up</button>
         </div>
         <p><small>Already have an account?<Link to="/login">Login</Link> </small></p>
       </div>
       </form>
     </div>
   </div>
 </div>
  );
};

export default SignUp;