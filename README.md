# ReactNative Learning App

I recently moved over to the Mobile app on our project at work, Kickserv, and am in the throws of learning how to write ReactNative code and learn the idioms of RN and Mobile development. This repo is my learning repository, my toy app, to break and fix, until I understand how things work.

I'm using branches to try to isolate work and learning.

This repo was originally created using [Create React Native App](README-ORIGINAL.md) and was ejected to provide a closer resemblance to my work environment.

## Quick guide to setting this up for demo

### Prerequisites

- XCode
- Android Studio
- Genymotion, optional

- you'll also need some sort of service that you can log into that takes an account slug as the first part of the path_info:

    https://server/account_slug/login_path
    
**NOTE:** This is a learning app I'm writing, not a tutorial, and the service I'm using is one at the company I work for which is **not** open to the public. I'm not going to provide a service for anyone else to try this out with. You're on your own there, matey.

### Install

- run `yarn` to install libraries and such

- create an `.env` file in the root directory, using `.env.sample` as a guide.

  - `PROTOCOL` - `http` or `hppts` probably
  - `SERVER_URL` - the host part of the URL used to log in and run queries
  - `LOGIN_PATH` - path components that come after the account slug
  
## Demo

- run `yarn ios` to fire up the applicaiton in an IOS simulator
- run `yarn android` to fire it up with an android simulator

Log in with credentials for the service you've set up.

## 0001/eject

After creating the new app, I ejected it using `yarn eject` and added in a few things to make the tests keep passing, just as `jest`, `eslint`, and `prettier`.

## 0002/screens

This branch started off being about authentication, but it quickly became obvious I and the app weren't ready for that, and I needed to learn about how screens work. I introduced the `react-navigation` library to provide router-style navigation stacks to the app.

## 0003/stack-navigation

Expanding out from 0002, this small branch introduces the concept of a Root navigator, and providing 2 screens for it, buttons to switch screens that push them onto the stack, using the back navigation, and calling a "goes-back-to" method from one of the screens that pops itself off the stack.

And issue at this point is that on android, while it makes use of the android's own back button, it doesn't use the react navigator's back button. This does still work on ios, but of course, ios doesn't have it's own back button.

## 0004/bottom-tab-nav

The app I'm working on has a (permanent) bottom "tab" style nav: a set of 5 tab areas that open different parts of the application.

(See <https://reactnavigation.org/docs/tab-based-navigation.html> for information on building tab navigation using react-navigation.)

I'm not sure what changed, but now both the navigator's back button and the android back button both work, and both do the same thing!!

### repurpose `routes.js`

- becomes the tab navigator

### organize the application by tabs:

- main screen becoes main tab
- alternate screen becomes alternate tab
- each tab has it's own stack

### Each stack keeps it's own place

Bouncing back and forth between tabs maintains each tab's stack, so if you're on the alternate screen of the main tab, switch to the alt tab, then back to the main tab, you're still on the main tab's alternate screen.

Question: can I reset the stack when the user selects a different tab? (I.e., destroy the stack.)

## 0005/reset-tab-stack

Trying to figure out how to reset the stack for a tab when the tab is selected.
There's probably something obbious I'm not getting here, but I cannot figure this out.
Seems like to would be a pretty standard wish, too.

I left a question on stackoverflow: <https://stackoverflow.com/questions/48725894/how-can-i-reset-a-child-stacknavigator-to-the-initial-screen-from-a-parent-tabna>

## 0006/stack-headers

Put a header on each stack.

Ok, this didn't quite work out. I'll come back to it.

## 0007/eslint-and-prettier

Look, we should do this right from the start, right?

And React-Navigator has issues with jest. See https://github.com/react-navigation/react-navigation/issues/256#issuecomment-278626369 and update in `package.json`.

## 0008/apollo-link-state

Instead of using Redux in my app, I want to use the new `apollo-link-state` feature that uses the apollo cache to hold local state.

- https://dev-blog.apollodata.com/the-future-of-state-management-dd410864cae2
- https://www.apollographql.com/docs/link/links/state.html

### ideas

- add a local state for when the application is logged in
- have a boolean `isLoggedin`
- keep an object that holds user info if need be
- figure out how to keep an auth token provided by the application (will probably still need to use some secure storage mechanism)
  - maybe can use react native cookies, somehow, to keep a session??
- shape of the app. `app/index.js`:
  - will choose whether to show the login screen or the main application `RootNavigator` depending on the state of `isLoggedIn`
  - wrap the local state query for logged in and user info around the App component
  - export the apollo wrappers 
- shape of the apollo client
  - create a new directory for apollo client
  - define the local store, resolvers, defaults, etc
  - define the various mutaions, queries, etc
  - provide easy handles to things like `isLoggedIn` and `userInfo` for the rest of the app
  
  
I'm not sure if this is going to work:

1. the HttpLink will need to have the authorization token available before the client is created
2. the local store can only be queried with the client

I'm not clear how to resolve 1 before i resolve 2.

This requires more thinking, obviously.

(Abandoned for now, going to use regular old redux for the login / user info stuff.)
 
  
## 0009/redux-login-state

Build a redux store to use to keep the login state of the client.

The main `app/index.js` will wrap the application in the provider, and switch between authentication and the application based on wether the user is logged in.

Authentication stores, reducers, actions, conainers, screens, and other logic is kept under `app/authentication/`. The `app/authentication/index.js` file will export `isLoggedIn` and `userInfo` for convenience functions for the rest of the application, as necessary. **EDIT:** turns out this is not necessary, keeping top-level state and passing it in as props.

Application is spread out among the rest of the directories, `app/components`, mainly. The entry point for the application, with whatever clients, providers, etc, it needs, will be defined in `app/main.js`

Holy cow, login and out, no redux needed, still! Wooo!!  The key thing was using `screenProps` to pass the user information and a logout function down into the main app from the root index. This is passed through the navigator to all the child screens, and ends up available on `this.props.screenProps`.



