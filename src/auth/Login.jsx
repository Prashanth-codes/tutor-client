import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
      e.preventDefault();
      setLoading(true)
      setErrorMessage('');

      try {
        const response = await axios.post('http://localhost:8000/login', { email, password });
        localStorage.setItem('token', response.data.accessToken);
        navigate('/score');
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
      }
      finally{
        setLoading(false);
      }
  };
  return (
    <div className='flex justify-center items-center w-full h-screen bg-cyan-50'>
        <div className='shadow-lg px-8 py-5 grid w-1/3 h-1/2 bg-white'>
            <h2 className='text-lg font-bold text-center'>Login</h2>
            <form onSubmit={handleSumbit}>
                <div className="mb-4 grid">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input id='email' type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-4 grid">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <div className="flex items-center">
                    <input 
                      id="password" 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder="Enter Password" 
                      className="w-full px-3 py-2 border rounded-l"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="px-3 py-2 bg-gray-200 border border-l-0 rounded-r hover:bg-gray-300"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
                {errorMessage && (
                  <p className="text-sm text-center text-red-500 mb-4">{errorMessage}</p>
                )}
                <button type="submit" className="w-full bg-blue-600 text-white py-2" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
            </form>
            <div className="text-center">
                <span>Don't Have Account?</span>
                <Link to='/signup' className='text-blue-500 ml-2'>Signup</Link>
            </div>
        </div>
    </div>
  )
}

export default Login