## Session 01 - Hello World

- Linked React & React-DOM CDN links to our app.

### Session 02 Changes

- Initialized `npm` with **default config** : `npm init -y`
- Installed `React` & `React-DOM` : `npm i react react-dom`
- Install parcel as `devDependency`: `npm i -D parcel`
- Started app with `Parcel CLI` : `npx parcel src/index.html`
- Created `start` & `build` script commands :

```json
    "source": "src/index.html",
    "scripts": {
        "start": "parcel",
        "build": "parcel build"
    },
```

If we set `source` property with **entry point** (src/index.html), we don't need to repeat src/index.html with every parcel command.

- Added `browserslist` : `browserslist": "> 0.5%, last 2 versions, not dead`,
