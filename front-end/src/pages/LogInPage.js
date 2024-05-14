import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LogInPage = () => {
    const [emailValue, setEmailValue ] = useState('');
    const [passwordValue, setPasswordValue ] = useState('');

    const history = useHistory();

    const onLogInClicked = async () => {
        alert('Log in not implemented  yet')
    }

    return(
        <div className="content-container">
            <h1>Log In</h1>
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someoneemail@gmail.com" />
            <input 
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <button
                onClick={onLogInClicked}>Log In</button>
            <button>Forgot your password</button>
            <button>Don't have an account? Sign up</button>
        </div>
    );
}
