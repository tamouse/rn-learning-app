import LoginContainer from "./login_container"
import * as Actions from "./actions"

export const Login = LoginContainer

export const isLoggedIn = Actions.isLoggedIn
export const getCredentials = Actions.getCredentials
export const setCredentials = Actions.setCredentials
export const clearCredentials = Actions.clearCredentials
export const AuthenticationActions = Actions
