import React from 'react'
import Header from '../components/Header'
import Loginc from "../components/Login";


const Login = () => {
  return (
    <div>
      <div className="max-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
        heading="Login to your account"
        paragraph="Don't have account yet"
        linkName="Signup"
        linkUrl="/signup"
         />
        <Loginc/>
        
    </div>
    </div>
    </div>
  )
}

export default Login