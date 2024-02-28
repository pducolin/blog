---
title: "How to add an RSS feed to your Next.js blog"
author: "poladuco"
date: "2024-02-28"
heroImage: 
  path: 
      big: /assets/images/update.webp
      small: /assets/images/update_small.webp
  alt: Update text on paper page in a typewriter, photo by Markus Winkler on Unsplash
---

After my [last post](https://www.poladuco.com/post/my-path-to-staff-engineer) a colleague reached out with a usefull feedback: what about adding an RSS feed, so that people could keep track of new content?

## What is an RSS feed?

An RSS feed is an XML file that contains the list of contents of a website, such as articles, news and episodes. It follows the [RSS specification](https://www.rssboard.org/rss-specification) and RSS clients regularly monitor feeds to keep track of updates.

The `rss` root node contains one `channel` node. The `channel` node contains the blog overall information and can contain one or more `item` nodes, each one defining a blog post:

```xml
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
  <atom:link href="<url to the rss feed>" rel="self" type="application/rss+xml"/>
  <title> blog title </title>
  <link> blog url </link>
  <description> blog description </description>
  <language> en </language>
  <lastBuildDate> RFC 822 formatted date and time of last update </lastBuildDate>
  <item>
    <title> Post title </title>
    <link> Post link </link>
    <author> author's email </author>
    <pubDate> RFC 822 formatted date and time of publication </pubDate>
    <guid> unique ID of the blog post </guid>
  </item>
</channel>
</rss>
```

W3C maintains a [free RSS validator](https://validator.w3.org/feed/) that I used to ensure my feed was well formatted.

## RSS feed and Next.js

Next.js supports server side [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports): I generate my blog HTML and CSS content at build time, when I push my updates to Github. When a browser opens my blog it loads static HTML pages generated the last time I pushed my code.

Next.js static export generates only HTML, but it can [serve any static content](https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets), under the `public` folder. 

I already had code to load my markdown posts, I wanted to use it at build time to generate the feed and add it to the `public` folder. 

Next.js loads the `public` folder content at build time, but content must be ready when `next build` starts. I did not want to generate the content dynamically as it the feed is as static as my posts. I did not want to commit a generated feed to Github neither, so I used my CI to generate it at build time, before it calls Next.js build command. 

## Generate the feed

I added [a TS library](https://github.com/pducolin/blog/blob/main/src/lib/rss.ts) to generate an RSS feed in Node, using the code that I use to generate my posts in Next.js. I prefered writing my code to play with RSS, but there are public libraries like [feed](https://github.com/jpmonette/feed).

I defined `yarn rss` in `scripts` in my `package.json` to have a shortcut to generate the feed.  

```json
"rss": "yarn tsx src/scripts/createRSS.ts"
```
Last step was calling it before I call the `next build` command in my CI. I updated the `command` in the `build` section in `netflify.toml` using the `&&` [bash operator](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Lists) to first call `yarn rss` and then `yarn run build`, if the rss generation succeeds. This way Netlify generates the rss feed and right after Next.js finds it in `public`:

```toml
[build]
  command = "yarn rss && yarn run build"
```

That's it! Now you can use [the generated RSS feed](https://www.poladuco.com/rss.xml) to track my content for updates.
