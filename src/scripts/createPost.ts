import "colors"

import { createInterface } from "readline"
import { writeFileSync } from "fs"

const log = console.log

const askQuestion = async (question) => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer)
    })
  )
}

const main = async () => {
  log(console.log("🙋‍♀️ Hi there! Let's create a new post.".blue.italic))
  let title
  try {
    title = await askQuestion("Title: ".magenta)
  } catch (e) {
    console.error(e)
    return
  }
  const header = `---
title: "${title}"
author: "poladuco"
date: "${new Date().toISOString().slice(0, 10)}"
heroImage: 
  path: 
      big: /assets/images/nextjs_loves_markdown.webp
      small: /assets/images/nextjs_loves_markdown_small.webp
  alt: Next.js loves Markdown
---

Icing pie powder brownie cake danish. Brownie fruitcake marzipan chocolate chocolate cake cake gummi bears. Jelly beans carrot cake bear claw muffin cupcake sweet roll. Chocolate bar bear claw candy canes chocolate bar lemon drops.

Fruitcake cupcake chocolate cake. Cotton candy macaroon biscuit carrot cake cookie. Jelly-o icing sugar plum croissant cake pudding toffee danish pudding.

Bonbon cotton candy oat cake sugar plum icing chocolate bar jelly-o. Jelly-o pie cheesecake sesame snaps candy topping candy canes cupcake gummies. Tiramisu bear claw biscuit soufflé sugar plum cake pie donut. Marshmallow cheesecake dessert cupcake jujubes.

Chocolate cake halvah dragée caramels chupa chups apple pie bonbon chocolate bar. Lollipop dragée macaroon. Bonbon cookie liquorice jujubes biscuit candy canes caramels. Soufflé jelly lemon drops lemon drops oat cake chocolate bar toffee cookie.

Apple pie jelly candy. Tiramisu fruitcake jelly beans lollipop. Gummies bonbon pudding halvah tart pastry bonbon brownie ice cream.
`
  const filename = title
    // The regular expression is /\s/g
    // * \s "white space"
    // * g "global, match every instance"
    .replace(/\s/g, "-")
    // The regular expression is /[^a-z0-9]/gi
    // * [^a-z0-9\-] "any  charachter tha is not a letter, not a number, not -
    // * i "ignore upper/lower case differences"
    // * g "global, match every instance"
    .replace(/[^a-z0-9-]/gi, "")
  writeFileSync(__dirname + `/../posts/${filename}.md`, header)
  console.log(`Done, go to ${filename} and start writing`.green)
}

main()
