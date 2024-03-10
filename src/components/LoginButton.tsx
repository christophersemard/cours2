"use client"
import { signIn, signOut } from "next-auth/react"

const LoginButton = () => {
  return (
    
    <button className="btn btn-success" onClick={() => signIn()}>Connexion</button>
  )
}

export default LoginButton