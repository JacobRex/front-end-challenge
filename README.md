# Frontend Challenge
For this demo project, I construct a single page app that takes up to 10 playing cards chosen by the user and organizes them by rank and tells you the high card. The user can also define a high card, which rotates the card order and will rank cards accordingly.

Under the hood I'm use Nuxt, Vue, PostCSS, CSSModules and Jest, as well as [this nifty card api](http://deckofcardsapi.com/).

![Animated Gif](/static/demo.gif)

## Build Setup
```bash
# Use the right node version (v12.16.1)
$ nvm use

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Running Tests

```bash
# run automated tests
$ npm run test
```

## Linting
This app uses basic eslint rules for vue.

```bash
# display linting errors
$ npm run lint

# autofix errors
$ npm run lintfix
```
