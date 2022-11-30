import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import styles from './LoginForm.css'
import '../../styles/LoginForm.css'
import * as authService from '../../services/authServices'

const LoginForm = (props: { updateMessage: (arg0: string) => void; handleSignupOrLogin: () => void ;}) => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (evt: { preventDefault: () => void; }) => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      // props.updateMessage(err.message)
    }
  }

  const { email, pw } = formData

  const isFormInvalid = () => {
    return !(email && pw)
  }

  return (
    <form
      id='signinform'
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
      <h1> Log In </h1>
      <label htmlFor="email" className='label'>Email</label>
      <input
        type="text"
        autoComplete="off"
        id="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder='Email'
      />
      <label htmlFor="password" className='label'>Password</label>
      <input
        type="password"
        autoComplete="off"
        id="password"
        value={formData.pw}
        name="pw"
        onChange={handleChange}
        placeholder='Password'
      />
      <button id='signinbtn' disabled={isFormInvalid()} className='button'>Log In</button>
      <Link to="/">
        <button id='signinbtn'>Cancel</button>
      </Link>
      <hr />
      <p>Don't have an account ? <Link to="/signup">Sign up</Link> or Sign in with Google</p>
    </form>
  )
}

export default LoginForm

