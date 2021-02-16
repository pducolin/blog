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

I followed [this incredibly well done tutorial](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/) by [Cassidoo](https://twitter.com/cassidoo) on Netflify's blog.

Following are more details and the rationale behind each choice.

## React

I picked React because I was already familiar with it, having used it for work and personal projects.

## Markdown

Markdown is another language I am familiar with as I use it to document code within its repository as it is supported and formatted by Github, Gitlab and Bitbucket. It takes a bit of time to get to know the [syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is made of ~10 elements, tiny but powerfull.

When I write posts I generally need paragraphs, [titles](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers), [images](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images), [code blocks](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code-and-syntax-highlighting) and sometimes [lists](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists). Most of the time I would go and check the cheatsheet, no need to know them by heart.

VSCode supports Markdown preview, and I recommend adding [Markdown lint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint).

## Next.js

Next.js is a framework to build React applications. It has a zero-configuration compilation and bundling setup that makes it handy to start with. I chose it because it was used in the tutorial I used, but I dug into it to understand how it works.

It requires a folder named `pages` that will contain the list of pages of the website as React components. The first super power of Next.js is that it supports file-system routing, meaning that requests to `yourwebsite.com` will load the default `index.js`, and requests to `yourwebsite.com/about` will route to `about.js`. Cool, isn't it?

Being pure React components, pages can use other components to create more or less complex structures.

You can argue that a blog is made of pages dynamically created based on a list of posts, that in my case are a list of `md` files. Second power, Next.js supports **server-side** dynamic pages creation: at build time it creates one page component for each Markdown file from a specific folder, using `[postname].jsx` as a schema.

![This project's posts folder containing 2 files, index.js and about.js, plus a post folder][pages_folder]

*This project has 2 pages (`index.js` and `about.js`) and, post folder*

It took me some time to understand what **server-side** vs **static** vs **client-side* rendering meant and how Next.js works under the hood. [Rendering on the web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) from Google developers blog explains in details all different renderings.

In my pages I use [getStaticProps](https://github.com/pducolin/blog/blob/main/pages/post/%5Bpostname%5D.jsx#L80) and [getStaticPaths](https://github.com/pducolin/blog/blob/main/pages/post/%5Bpostname%5D.jsx#L96) to get dynamic informations, such as the list of post names. These two functions are called by Next at **build time** and used to pre-render Javascript pages using the props returned.

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

[pages_folder]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/nextjs_pages.webp "This project has 2 pages (`index.js` and `about.js`)"
[out_folder]: https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/build_and_export.webp "This project out folder"
