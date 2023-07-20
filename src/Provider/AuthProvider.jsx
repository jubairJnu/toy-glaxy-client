import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, SetLoading] =useState(true);



  const logIn=(email,password)=>{
    SetLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  const signUp = (email,password)=>{

    return createUserWithEmailAndPassword(auth,email,password);
  }

  const logOut =()=>{
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      SetLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  const authIfo ={
    user,
    loading,
    logIn,
    signUp,
    logOut
  }

  return (
    <AuthContext.Provider value={authIfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;