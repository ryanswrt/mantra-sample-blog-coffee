## A Sample Blog App Written in Mantra + Coffeescript

This is a port of the [Mantra sample blog app](https://github.com/mantrajs/mantra-sample-blog-app), but using CoffeeScript to write React components with Jade like syntax, providing about a 15% reduction in character count, and the possibility of stripping out the jsx pre-processor from the build process.

I know it most probably goes against the Mantra spec, but Coffeescript remains more expressive than ES2015, and the syntactical efficiency adds up in the long run

### Setting Up

* Clone this repo
* Ensure you have npm > v3 installed 
* Do `npm install` to install dependencies (ensure you have npm v3 installed)
* Make sure you've installed Meteor locally

### Running The App

Simply start your app with `meteor -p 5005`. 
Then you can access the app on <http://localhost:5005>

### Running Tests

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:

```
npm test
```

**See package.json for more information about testing setup.**

### Running Storybook

This app is setup for [React Storybook](https://github.com/kadirahq/react-storybook). Run following command to start the React Storybook:

```
npm run storybook
```
