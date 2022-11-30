import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm'
// export interface ILoginPageProps {}
interface ILoginPageProps{
    // updateMessage: (arg0: string) => void;
    handleSignupOrLogin:() => void;
}
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {

    
    const updateMessage = (msg: string) => {
        console.log(msg)
    }
    return (
        <main className='container'>
        {/* <p>{message}</p> */}
        <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
        />
        </main>
        );
    };
    
    export default LoginPage;