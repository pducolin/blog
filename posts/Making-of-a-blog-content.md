---
title: "Making of a blog: Markdown ❤️ Next"
author: "poladuco"
date: "2021-02-16"
heroImage: 
  path: 
    big: /assets/images/nextjs_loves_markdown.webp
    small: /assets/images/nextjs_loves_markdown_small.webp
  alt: Next.js loves Markdown
---

As listed in the [intro](https://www.poladuco.com/Making-of-a-blog-intro), I created this blog using [React](https://reactjs.org/), [Next.js](https://nextjs.org/) and [Markdown](https://github.com/remarkjs/react-markdown).

I followed [the Netlify's tutorial](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/) by [Cassidoo](https://twitter.com/cassidoo), and it is so well written that I strongly recommend it. There's even a [ready-to-clone Github](https://github.com/cassidoo/next-netlify-blog-starter).

It took me some time to understand how the 3 work together, here's what I learned. No need to go through all this, using the linked tutorial will get you ready to go and write your blog's content. If you're curious as I am, and you are new to any of these technologies you might find the following interesting.

## Let me jump to

- [React](#React)
- [Markdown](#Markdown)
- [Next.js](#Next.js)
- [React + Next.js + Markdown = ❤️](#React-+-Next.js-+-Markdown-=-❤️)

## React

I picked React because I was already familiar with it, having used it for work and personal projects.

React uses Javascript to render HTML elements at runtime; few years ago I used jQuery in a project and it has some of its concepts.

To understand how it works, let's take an HTML document as example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Page title, this appears in the browser tab</title>

    // React script, adds its top level API
    <script src="https://unpkg.com/react@^17/umd/react.production.min.js"></script>
    // ReactDOM script, adds functions to interact with the DOM (Document Object Model) 
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
    // Babel script, enables using ES6+ JavaScript in old browsers like the evil IE11
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root">
      // React code will add content here
    </div>

    <script type="text/babel">
      // React code will go here
    </script>
  </body>
</html>
```

Let's add a `header` HTML element to the `div` with `id="root"` and say `Hello world` in it. To do so, we use `ReactDOM.render`:

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

That's it, when downloaded on the browser (aka client side) this JavaScript code will add an `Hello World` to the HTML page. You can test it on [Codepen](https://reactjs.org/redirect-to-codepen/hello-world).

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>Page title, this appears in the browser tab</title>

    // React script, adds its top level API
    <script src="https://unpkg.com/react@^17/umd/react.production.min.js"></script>
    // ReactDOM script, adds functions to interact with the DOM (Document Object Model) 
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
    // Babel script, enables using ES6+ JavaScript in old browsers like the evil IE11
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  </head>

  <body>
    <div id="root">
      // After client's browser executes the JavaScript in this page
      // Here there will be
      // <h1>Hello, world!</h1>
    </div>

    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
    </script>
  </body>
</html>
```

If I copy the `<h1>Hello, world!</h1>` into a variable `helloElement`, I can call `ReactDOM.render` passing `helloElement`. This hybrid HTML/string syntax is introduced by React and it's called `JSX`.

```jsx
const helloElement = <h1>Hello, world!</h1>
ReactDOM.render(
  helloElement,
  document.getElementById('root')
);
```

To add dynamic content such as the current time, I can pass a function to `ReactDOM.render`

```js
const Timer = () => {
  return <h1>{`It's ${(new Date()).toISOString()}`}</h1>
}

ReactDOM.render(
  <Timer/>,
  document.getElementById('root')
);
```

`Timer` is a function returning an HTML element, and it is called `Component` in React. A component can use other components, like tomato sauce and mozzarella can be combined together and used as pizza topping.

![Photo of a pizza napoletana][pizza]
*Photo by [Aurélien Lemasson-Théobald](https://unsplash.com/@aurel__lens) on Unsplash*

## Markdown

Markdown is a language I am familiar with as I use it to document code within its repository as it is supported and formatted by Github, Gitlab and Bitbucket. It takes a bit of time to get to know [the syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is made of ~10 elements, tiny but powerfull. I don't know all of them by heart, I use this cheatsheet quite a lot.

When I write posts I generally need paragraphs, [titles](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers), [images](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images), [code blocks](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting) and sometimes [lists](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists).

VSCode supports Markdown preview, I recommend adding [Markdown lint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) to spot errors while writing it.

[React Markdown](https://github.com/remarkjs/react-markdown) is a JavaScript library that adds a React component that renders Markdown content (test it on [CodeSandbox](https://codesandbox.io/embed/musing-jepsen-usn1d?fontsize=14&hidenavigation=1&theme=dark)):

```js
  const markdown = '**bold** and _italic_'

  <ReactMarkdown>{markdown}</ReactMarkdown>
```

## Next.js

Next.js is a framework to build React applications. It has a zero-configuration compilation and bundling setup that makes it handy to start with. I chose it because it was used in the tutorial I used, but I dug into it to understand how it works.

It requires a folder named `pages` that will contain the list of pages of the website as React components.

The first super power of Next.js is that it supports file-system routing, meaning that requests to `yourwebsite.com` will load the default `index.js` and requests to `yourwebsite.com/about` will route to `about.js`. Cool, isn't it?

Being pure React components, pages can use other components to create more or less complex structures.

Posts are created at build time, on the server, using a special page named `[postname].jsx`. They will be available at `yourwebsite.com/post/[name-of-my-awesome-post]`. Remember file-system routing? `[postname].jsx` is in `pages/post` folder!

![This project's posts folder containing 2 files, index.js and about.js, plus a post folder][pages_folder]
*This project has 2 pages (`index.js` and `about.js`) and, post folder*

This is the second power of Next.js: it supports **server-side** dynamic pages creation: at build time it scans your project for Markdown files and creates a page for each one, using `[postname].jsx` as a schema.

### server-side vs client-side rendering

It took me some time to understand what **server-side** vs **client-side** rendering meant and how Next.js works under the hood. [Rendering on the web by Jason Miller and Addy Osmani](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) is a great resource to learn more.

Considering the pizza 🍕 analogy, I consider rendering as the cooking of a pizza:

- on server-side the pizza is delivered fully baked, you can eat it right away
- on client-side you get the pizza base, the toppings and the recipe (the script) to follow to put them together and bake it on your oven (aka on your browser)

Having the page delivered as static content reduces the time to ~~eat~~ load it on the browser, and makes it easier to index it on search engines. Next.js helps creating static pages using a dynamic informations such as the post list and their content.

### server-side rendering in Next.js

In my post schema page I use [getStaticProps](https://github.com/pducolin/blog/blob/main/pages/post/%5Bpostname%5D.jsx#L80) and [getStaticPaths](https://github.com/pducolin/blog/blob/main/pages/post/%5Bpostname%5D.jsx#L96) to get dynamic informations, such as the list of post names. These two functions are called by Next at **build time** and used to pre-render Javascript pages using the props returned.

By running `next build && next export` the magic happens, and next generates the HTML static pages:

![This project's out folder with build time, static html pages][out_folder]

And this is even cooler, as client's browser will download the HTML already rendered, no React manipulating the DOM.

## React + Next.js + Markdown = ❤️

Here's how to mix the React, Next.js and Markdown together to obtain a blog post page in 3 steps

1️⃣  I create a markdown blog post and save it in `posts` folder. Note how I pass title, hero image and date metadata info using the frontmatter at the top of the markdown file

```md
---
title: "My new post"
author: "poladuco"
date: "2021-02-16"
heroImage: 
  path: 
    big: /path/to/public/assets/image
    small: /path/to/public/assets/image_small
  alt: Description of the image
---

# H1 title

Mlkshk chambray bushwick subway tile occupy. Vegan meh chicharrones, cliche fam etsy viral tousled forage pork belly ramps migas coloring book banjo. Organic banh mi keytar shaman trust fund, pok pok cliche. Williamsburg shoreditch prism, green juice disrupt blog tbh retro hexagon waistcoat before they sold out biodiesel godard ethical.
```

2️⃣ I fetch the markdown content using Next.js's `getStaticProps` from `[postname].jsx`:

```js
export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params
  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content
    }
  }
}
```

3️⃣ I pass the markdown body to React Markdown as child:

```jsx
<ReactMarkdown>{markdownBody}</ReactMarkdown>
```

That's it! Running:

```bash
# dev mode
yarn dev
# or prod mode
yarn build && yarn export
```

will generate one page per markdown file 🎉

Next post will be about the design, from picking colors to TailwindCss and @tailwindcss/typography. Stay tuned!

## Resources

- [Getting started with React ny Tania Rascia](https://www.taniarascia.com/getting-started-with-react/)
- [Building a markdown blog with Next 9.4 and Netlify by Cassidy Williams](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/)
- [Rendering on the web by Jason Miller and Addy Osmani](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)

[pages_folder]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/nextjs_pages.webp "This project has 2 pages (`index.js` and `about.js`)"
[out_folder]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/build_and_export.webp "This project out folder contains all the pages created at build time"
[pizza]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/pizza.webp "React components are like ingredients in a recipe"
