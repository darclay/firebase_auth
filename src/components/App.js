import './App.css'
import Dashboard from './Dashboard'
import Signup from './Singup'
import Login from './Login'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'

export default function App() {
  return (
    
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
          <Routes>
            <Route path="/" 
              element={<PrivateRoute><Dashboard/></PrivateRoute>}
            />
          
            <Route path="/signup"
              element={<Signup />}
            />

            <Route path="/login"
              element={<Login />}
            />
            
            <Route path="/update-profile"
              element={<UpdateProfile />}
            />

            <Route path="/forgot-password"
              element={<ForgotPassword />}
            />
          </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}