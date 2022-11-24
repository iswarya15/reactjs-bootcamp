### What is JSX?

JSX is just syntactic sugar for `React.createElement`. It is neither HTML nor Javascript. Instead of calling React.createElement(component, props, children), we can use JSX to create React Elements with less work. When we write nested elements using createElement, code becomes less readable. Hence we use JSX. In the end, JSX is transpiled to React.createElement object only.

### Superpowers of JSX

- JSX improves _code readability_ and developing React Component using JSX is much easier than using React.createElement.
- It also prevents Injection attacks like XSS - Cross side scripting by converting JSX into string before rendering.

### Role of type attribute in script tag? What Options can I use there?

The type attribute indicates the content type of the scripting language. A script tag having `type="module"` attribute tells that the script is a **Javascript module**. It may be importing other Javascript module(s) inside it. Importing modules cannot be done in normal JavaScript.

```HTML
<script src = "main.js" type = "text/javascript" ></script>

<script src = "main.js" type = "application/javascript" ></script>

<script src = "main.js" type = "application/ecmascript" ></script>
```

{TitleComponent} vs {<TitleComponent>} & {<TitleComponent></TitleComponent>}

{TitleComponent} => Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

{<TitleComponent>} & {<TitleComponent></TitleComponent>} renders the component
