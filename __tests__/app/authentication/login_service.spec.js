import { login } from "../../../app/authentication/login_service"
jest.mock("react-native-config")

describe("test login service", () => {
  describe("calls fetch with the expected parameters", () => {
    global.fetch = jest.fn()

    const params = {
      account_slug: "account",
      username: "user",
      password: "pass"
    }

    beforeEach(() => {
      login(params)
    })

    it('calls fetch once', ()=>{
      expect(global.fetch).toBeCalled()
    })

    it('is called with the right URL', ()=>{
      const expectedUrl = "https://server/account/login"
      expect(global.fetch.mock.calls[0][0]).toEqual(expectedUrl)
    })

    it('is called with the right body',  ()=>{
      const expectedBody = { username: "user", password: "pass" }
      expect(JSON.parse(global.fetch.mock.calls[0][1].body)).toEqual(expectedBody)
    });

    it('is called with the right method', function () {
      expect(global.fetch.mock.calls[0][1].method).toEqual('POST')
    });

    it('is called with the right headers', function () {
      const expectedHeaders = {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
      expect(global.fetch.mock.calls[0][1].headers).toEqual(expectedHeaders)
    });

  })
})
