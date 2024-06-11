import { forgotPasswordRoute } from './forgotPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
import { logInRoute } from './logInRoute';
import { resetPasswordRoute } from './resetPassword';
import { signUpRoute } from './SignUpRoute';
// import { testEmailRoute } from './testEmailRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';

export const routes = [
    forgotPasswordRoute,
    getGoogleOauthUrlRoute,
    logInRoute,
    resetPasswordRoute,
    signUpRoute,
    // testEmailRoute,
    testRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
];
