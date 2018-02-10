# ReactNative Learning App

I recently moved over to the Mobile app on our project at work, Kickserv, and am in the throws of learning how to write ReactNative code and learn the idioms of RN and Mobile development. This repo is my learning repository, my toy app, to break and fix, until I understand how things work.

I'm using branches to try to isolate work and learning.

This repo was originally created using [Create React Native App](README-ORIGINAL.md) and was ejected to provide a closer resemblance to my work environment.

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

