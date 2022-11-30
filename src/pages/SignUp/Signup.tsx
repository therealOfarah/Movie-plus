import { SetStateAction, useState } from 'react'
// import styles from './Signup.module.css'
import SignupForm from '../../components/SignupForm/SignupForm'
const Signup = (props:{handleSignupOrLogin: () => void }) => {
  const [message, setMessage] = useState([''])

  const updateMessage = (msg: SetStateAction<string[]>) => {
    setMessage(msg)
  }

  return (
    <main >
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup