import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
  let navigate = useNavigate()
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()

  function handleLogout(){
    setError('')
    console.log('logged out')
    try{
      logout()
      navigate("/login")
    }catch{
      setError('Failed to log out')
    }

  }

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: {currentUser.email}</strong>
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>LogOut</Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}
