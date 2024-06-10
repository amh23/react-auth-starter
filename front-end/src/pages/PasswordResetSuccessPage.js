import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const PasswordResetSuccessPage = () => {
    const history = useHistory();

    return(
        <div className="content-container">
            <h1>Success!</h1>
            <p>
                Your password has been reset, now please login with your new password.
            </p>
            <button onClick={() => history.push('/login')}>Log in</button>
        </div>
    )
}