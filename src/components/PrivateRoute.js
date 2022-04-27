import { Outlet, Navigate } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute(props:any){
  // const { currentUser } = useAuth()
  function useAccess(){
    return true
  }

  const access = useAccess()
  
  return access?<Outlet/>: <Navigate to="/login"/>
}
    