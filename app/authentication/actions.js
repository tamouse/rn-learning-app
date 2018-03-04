import * as Keychain from "react-native-keychain"

/**
 * Returns the logged in status.
 * @return {boolean}
 *
 * The status of the retrieved credential object determines the return value
 */
export const isLoggedIn = async () => {
  let c = await getCredentials()
  console.log(`DEBUG >>>> credentials I can see are: ${JSON.stringify(c)}`)
  return c.status
}

/**
 * Retrieves the credentials for the user
 * @returns {Object}
 *
 * The returned object contains the credentials: account and token, the status (true/false) for the operation,
 * and an error message if it has failed
 */
export const getCredentials = async () => {
  const credentials = await Keychain.getGenericPassword()
  if (credentials) {
    let data = {
      account_slug: credentials.username,
      token: credentials.password
    }
    return {
      credentials: data,
      status: true
    }
  } else {
    return {
      credentials,
      status: false,
      message: `Unable to obtain credentials`
    }
  }
}

/**
 * Sets the credientials in the Keychain (used when logging in)
 * @param account
 * @param token
 * @returns {Promise<boolean>}
 */
export const setCredentials = (account, token) => {
  return Keychain.setGenericPassword(account, token)
}

/**
 * Clears the Keychain of generic credentials (used for logging out)
 * @returns {Promise<boolean>}
 */
export const clearCredentials = () => {
  return Keychain.resetGenericPassword()
}
