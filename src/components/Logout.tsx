"use client"
import { signOut } from "next-auth/react"

const Logout = () => {
  return (
    
    <button className="btn btn-error btn-sm" onClick={() => signOut()}>Déconnexion</button>
  )
}

export default Logout