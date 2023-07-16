import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(user?.email){
    return children;
  } 

  if (loading) {
    return <progress className="progress w-56"></progress>
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;