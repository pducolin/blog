require("module-alias/register")

import { generateRSSFeed } from "@lib/rss"

main()

const main = async () => {
  const configData = await import(`../siteconfig.json`)
  return generateRSSFeed({
    title: configData.default.title,
    url: configData.default.siteURL,
    description: configData.default.description
  })
}
