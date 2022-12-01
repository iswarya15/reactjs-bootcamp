### What is a pure function?

A pure function returns the same result if the same arguments are passed in the function. The return value of the function on the function call should only be dependent on the input function arguments. It does not modify application state outside of it's scope.

### Difference between `HeaderComponent()` and `<HeaderComponent />`

- When a functional component is used as `<Component />` it will have a lifecycle and can have a state.
- When a function is called directly as Component() it will just run and (probably) return something. It will not have a lifecyle.

### What is React.Fragment?

React Fragments let you group elements without leaving any trace in the browser HTML tree.

### Use of default in export default CardComponent?

When a function is exported using the default keyword, we can import it using any name. Usually default keyword is used when there is only one component to be exported from the file.

### What is a config-driven UI?

In normal apps, data is driven from backend and client decides how to render it. In Config/Server driven UI, the server decides what to render and how to render. Hence we can change the design of the app without updating the client.

### Advantages of config-driven UI

- Enables new features to be deployed on all platforms simultaneously via a backend change without any frontend build deployments.

- Businesses no longer need to depend on users to update the app to show specific UI or to change the order of the UI (at least for the most part).

### What if we have given the same id in the array of data objects?

The id is used to identify the object/element in the list to keep track of what element is updated or deleted. Hence id should be different for each element in the array.

### Index is not a good way to pass as key. Why?

It is not recommended to use the index of the array as the key prop if you know the array will not be static. If the key is an index, reordering or deleting an item in the array changes the key. Then React will get confused and re-render the incorrect element.
