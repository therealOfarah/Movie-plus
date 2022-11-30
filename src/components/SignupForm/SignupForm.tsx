import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/SignupForm.css'
import * as authService from '../../services/authServices'

const SignupForm = (props: { updateMessage: any;handleSignupOrLogin: () => void }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    code:''
  })
  
  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err)
    }
  }
  const { name, email, password, passwordConf,code } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }
  // console.log(formData)
  return (
    <div id='signupform'>
      <h1> Sign Up Now</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='container'
      >
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder='Name'
          />
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder='Email'
          />
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder='Password'
          />
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            placeholder='Confirm Password'
          />
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={code}
            name="code"
            onChange={handleChange}
            placeholder='Admin Code'
          />
          <button id='signupbtn' disabled={isFormInvalid()} className='button'>
            Sign Up
          </button>
          <Link to="/">
            <button id='signupbtn' className='cancel'>Cancel</button>
          </Link>
          <hr />
          <p>Do you have an account ? <Link to="/login">Sign in</Link></p>
      </form>
    </div>
  )
}

export default SignupForm