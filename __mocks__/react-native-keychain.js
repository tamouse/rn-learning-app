export const Keychain = (function () {

  let store = {}

  async function getGenericPassword() {
    console.log(`in getGenericPassword`)
    return new Promise((resolve, reject) => {
      process.nextTick(() => {
        resolve(store.credentials)
      })
    })
  }

  async function setGenericPassword(username, password) {
    return new Promise((resolve, reject) => {
      store.credentials = {
        username,
        password
      }
      process.nextTick(() => {
        resolve()
      })
    })
  }

  async function resetGenericPassword() {
    return new Promise((resolve, reject) => {
      store = {}
      process.nextTick(() => {
        resolve()
      })
    })
  }

  return {
    getGenericPassword,
    setGenericPassword,
    resetGenericPassword
  }
})()

export default Keychain
