### Why is react known as React?

Since it is **reactive** to any changing inputs or state.

[Read more on React origin from Docs](https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html)

### What is Emmet?

Emmet is a VSCode extension that allows developers to write _abbreviations or shortcuts_ of code snippets which is then `expanded to full piece of code`.

### What is CDN?

- A content delivery network (CDN) is a network of interconnected servers that **speeds up webpage loading** for data-heavy applications. CDN can stand for `content delivery network` or `content distribution network`.
- When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image.
- Instead, the website content is stored on **CDN servers geographically closer to the users** and reaches their computers much faster.

[What is a CDN?](https://aws.amazon.com/what-is/cdn/)

### Use of ‘crossorigin’ while adding external scripts

The purpose of crossorigin attribute is used to _share the resources from one domain to another domain_. Basically, it is used to handle the `CORS request`. It is used to handle the CORS request that checks _whether it is safe to allow for sharing the resources from other domains_. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a `cross-origin request` or not.

**CORS**: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain for fetching the resources.

### Difference between dev & prod files in react CDN

The difference is that Production build has **minified(compressed)** version of javascript code, so this makes rendering of file on end user's browser very quick and performance enhancing whereas development environment has features such as hot module replacement (HMR) to improve development time.
