### What is NPM?

`npm` is a package manager for javascript packages. If we're working on a Javascript project and we need to use a third party package that solves a problem, we can use NPM to _install the package via CLI_ instead of manually downloading the package and linking it via script tags.

Since we specify our project dependencies in `package.json` file, anyone who wants to work on our application can just run `npm install` and all the dependencies gets installed. It is also possible to maintain dependencies version so any updates to the dependency doesn't break our application.

### What is Parcel/Webpack? Why do we need it?

Parcel/Webpack is a **module bundler** for Javascript applications. It is used to _bundle multiple Javascript modules into single Javascript file that can be executed in the browser_.

These are the problems a module bundler is trying to solve:

#### Load Speed

Loading **individual scripts** for a webpage is **very costly** since for each script, there is an HTTP Request made. Webpack/Parcel helps us improving the load speed by bundling every javascript modules into single file.

#### Dependency Issues

Before webpack/parcel, we used to _arrange scripts and libraries_ in the proper order to connect dependency correctly. With ES6 feature, we can `import` and `export` javascript modules and webpack/parcel would **load code that needs to be loaded first**. `Webpack/parcel` _keeps track of what files depend on what and loads them accordingly_.

### What is .parcel-cache?

`Parcel` caches everything it builds to disk. If we restart the dev server, `parcel` will **only rebuild the file that has been updated since the last build**. That's why parcel can be so fast in development mode. `parcel-cache` stores the build files.

### What is npx?

`npx` allows developers to _execute any Javascript Package_ available on the NPM registry **without even installing it**. `npx` is useful during a _single time package_ use. NPX is installed automatically with NPM version 5.2.0 and above.

For example: Using npx, we can create a react app using the `npx create-react-app myapp` command without installing the create-react-app package. This command is required in every app's lifecycle only once.

### What is the difference between dependencies vs devDependencies?

`Dependencies`: The packages **required to run a piece of software/application**
`Dev Dependencies`: The packages needed during the **development phase only**.

Some good examples of **dependencies** which would be required at runtime include _React, Redux, Express_, and _Axios_.

Some good examples of when to install **devDependencies** would be _Nodemon, Babel, ESLint, and testing frameworks like Chai, Mocha, Enzyme_, etc…

### What is Tree Shaking?

When we import and export modules in Javascript, most of the times there is unused code floating around. `Tree Shaking or dead code elimination` means that _unused code will not be included in the bundle_ during the build.

Tools like `Webpack/Parcel` will **detect and remove the unused code**. It only works with `import` and `export` syntax since the modules are **static**. It won’t work with `CommonJS modules` (modules imported using the require() syntax) since these modules can be imported dynamically based on conditions.

```js
var myDynamicModule;

if (condition) {
  myDynamicModule = require("foo");
} else {
  myDynamicModule = require("bar");
}
```

The **dynamic nature of CommonJS modules** meant that tree shaking could not applied because it would be _impossible to determine which modules will be needed before the code is actually run_.

In ES6 import syntax, we can no longer dynamically import a module which allows for effective tree shaking as any code that is used from an import can be determined without running the code.

### What is Hot Module Replacement?

- HMR _improves the development experience_ by updating modules in browser at runtime without needing a whole page refresh. You can update only the changed modules without a full page reload.

- This means that `application state` can be **retained as you change small things in your code**.

- `CSS changes` are **automatically applied via HMR** with _no page reload necessary_.

### Five superpowers of Parcel

1. Lazy loading modules: You can use the `--lazy` CLI flag to **tell `Parcel` to defer building files until they are requested by the browser**, which can significantly reduce the development build times.

2. Caching : `Parcel` _caches everything it builds to disk_. If you restart the dev server, `Parcel` will only rebuild files that have changed since the last time it ran. This makes development faster.

3. Development Target: If you need to test in a older browser, you can provide the `--target CLI` option to choose which of your targets to build.`Parcel` will transpile the code accordingly to support target browsers.
4. Hot Module Replacement
5. Dependency resolution

### What is .gitignore?

A gitignore file specifies file names (or) pattern for file names that Git should ignore. A file should be ignored if any of the following is true:

- Log files
- Files with API keys/secrets, credentials, or sensitive information
- Useless system files like .DS_Store on macOS
- Generated files like dist folders
- Dependencies which can be downloaded from a package manager

### What is the difference between package.json and package-lock.json?

`package-lock.json`: records the exact version of each installed package which allows you to see same results in every environment.

`package-json`: consists of meta-information about package ike versioning information, what the package is about, dependencies and devDependencies of the package.

### Why should I not modify package-lock.json?

package-lock.json should not be edited since any update in a dependency package might break our application. Hence it is not touched.

### What is node_modules?

The node_modules folder contains libraries downloaded from npm. You shouldn't push it to github, because everyone who clones your repository can download it themselves (based on your package.json).

### What is a dist folder ?

The dist folder consists of the compiled or minified version of our app that can be used for our production deployment.

### What is browsersLists?

Browserslist is a tool that allows specifying _which browsers should be supported_ in your frontend app by specifying "queries" in a config file.

### What is <noscript> tag in the index.html of Create React App?

The content inside the noscript element will be displayed if _scripts are not supported_, or are disabled in the user's browser.

### What is the role of manifest.json file in CreateReact App?

Create React App (CRA) includes a web app manifest by default. Modifying this file will allow you to change how your application is displayed when installed on the user's device.

Web app manifest files provide the capability to change how an installed application will look like on the user's desktop or mobile device. We can modify details like name, description, app icon and theme color.
