
## Step 0001: eject

* Ejected the app from the create-react-native-app structure. 
* Installed `jest`, `prettier`, and `eslint` as development dependencies.
* created the `app/` and `__tests__/` directories
* Moved `App.js` to `app/index.js`
* Moved `App.test.js` to `app/index.test.js`

## Step 0002: apollo client

Adding Apollo client to the application.

    yarn add apollo-client-preset react-apollo graphql-tag graphql
    
* Create `apollo_client.js`

Woops, really didn't want the preset above.

    yarn remove apollo-client-preset
    yard add apollo-client apollo-link-http apollo-cache-inmemory

No, on second thought, lets start over.
