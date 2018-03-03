import Config from "react-native-config"

export function login(params) {
  let { account_slug, username, password } = params
  account_slug = account_slug.trim()
  username = username.trim()
  password = password.trim()

  const url = `${Config.PROTOCOL}://${Config.SERVER_URL}/${account_slug}/${
    Config.LOGIN_PATH
  }`
  const method = "POST"
  const headers = {
    "Content-type": "application/json",
    Accept: "application/json"
  }
  const body = JSON.stringify({
    username,
    password
  })

  fetch(url, {
    method,
    headers,
    body
  })
}

export default login
