---
title: "Making of a blog: style me up"
author: "poladuco"
date: "2021-02-24"
heroImage: 
  path: 
    big: /assets/images/plating.webp
    small: /assets/images/plating_small.webp
  alt: Plating by Monstruo Estudio on Unsplash
---

In [last post](https://www.poladuco.com/Making-of-a-blog-content) I detailed the technologies I chose to create the content of this blog. In this post I will describe the technologies and resources I used to add style and plate this blog.

## Tailwind Css

I first got to know Tailwind CSS one year ago thanks to a [talk on egghead.io](https://egghead.io/talks/tailwind-egghead-talks-tailwind-the-future-of-css-is-here-amadou-sall) by [Amadou Sall](https://twitter.com/ahasall). Back then I was in the middle of converting from native desktop development to web development.

I personally felt uncomfortable with the separation of concerns between CSS and HTML: I could easily misspell a CSS class name, or use the wrong HTML type and find get lost in my design implementation process.

Here are two examples in the languages I was familiar with:

```xml
// A text component in Xaml, .NET
<TextBlock Text="Hello, world!" 
           Foreground="Blue" 
           FontStyle="Italic"
           FontSize="22"/>
```

```qml
// A text component in Qml, Qt
Label {
    text: "Hello, world!"
    font.pixelSize: 22
    font.italic: true
    color: "blue"
}
```

And what I found in web:

```html
<div class='label'>Hello, world!</div>
```

```css
 /* A text component in CSS */
.label {
  color: "blue";
  font-size: 22px;
  font-style: italic;
}
```

Keeping the style code as close as possible to the HTML tag felt more natural, more familiar to me.  

Here is where Tailwind made sense to me:

- 🧱 it is a collection of atomic CSS classes, meant to be explicit and assigned to the html items.

- 📦 It supports tree-shaking, so only the used classes are bundled.

- 👩‍🔧 It can be configured, modified and extended to have the colors, margins, fonts definitions we want.

- 📑 It is well documented with clear examples.

- 🌟 It has a [plugin] to add typographic defaults to vanilla HTML you don't control, like the rendered Markdown.

Let's get started!

### Setup

1. I added Tailwind to my Next project by running:

    ```bash
    yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
    ```
  
2. I created my tailwind config file by running:

    ```bash
    npx tailwindcss init -p
    ```

3. I configured Tailwind to remove unused styles in production

    ```js
      // tailwind.config.js
      module.exports = {
        purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        darkMode: false, // or 'media' or 'class'
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      }
    ```

4. Import Tailwind in all pages:

    ```js
    // index.jsx
    import "tailwindcss/tailwind.css";

    ...
    ```

5. If you are using VS Code, I recommend installing [VS Code Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to have intellisense and linting.

### Using Tailwind CSS

Once you import tailwind into your React files, you can start using its classes to define the style.

It comes with a preset of spacing, margins, colors and fonts that you can customize to match your desired design.

Keeping the example of a blue text block:

```html
<div class='text-md text-blue-600 italic'>Hello, world!</div>
```

You can play with it it on [this codepen](https://codepen.io/poladuco/pen/bGBaRqz)

It supports both `flex` and `grid` layout - there is a plugin to support even [grid area](https://www.npmjs.com/package/@savvywombat/tailwindcss-grid-areas)

I could add style to the rendered Markdown thanks to [@tailwindcss/typography](@tailwindcss/typography). It provides a set of `prose` configurable classes:

```jsx
<div className="prose mx-6 md:mx-8 lg:mx-12 max-w-none">
  <ReactMarkdown renderers={renderers}>{markdownBody}</ReactMarkdown>
</div>
```

I [defining colors](https://github.com/pducolin/blog/blob/main/tailwind.config.js#L8-L14) from a palette I picked from [coolors.co](https://coolors.co/ffcdb2-ffb4a2-e5989b-b5838d-6d6875). 

I added [some heights definitions](https://github.com/pducolin/blog/blob/main/tailwind.config.js#L18-L24). 

I [extended variants](https://github.com/pducolin/blog/blob/main/tailwind.config.js#L29) support to change the SVG's `fill` property on `hover` and `focus`. This let me style the SVG icons collection from [zondicons](https://www.zondicons.com/)

Finally I [extended the group variants](https://github.com/pducolin/blog/blob/main/tailwind.config.js#L31-L34) to change more properties on [group hover](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover).

## In conclusion

I recommend playing with TailwindCss to understand if it fits your needs: I could achieve the design I had in mind. I was surprised by how it handles even group `focus`/`hover`.

I could add [style to SVG](https://tailwindcss.com/docs/fill) and  and customise with my palette of colors, everything was a google search away.

Let's try it and let me know how you like it, if you find any obstacle. Reach out on Twitter, I'll be glad to chat!

## Resources

- 📺 [Tailwind: The future of CSS is here](https://egghead.io/talks/tailwind-egghead-talks-tailwind-the-future-of-css-is-here-amadou-sall)

- 📺 [In defense of Utility-First CSS](https://www.youtube.com/watch?v=R50q4NES6Iw)

- 📃 [TailwindCss](https://tailwindcss.com/)

- 📃 [@tailwindcss/typography](@tailwindcss/typography)

- 🎨 [Coolors.co](https://coolors.co/)

- ✚ [Zondicons](https://www.zondicons.com/)