import {config} from "config/sitemap"
import { generateRSSFeed } from "lib/rss"

const main = () => {
  return generateRSSFeed({
    title: config.title,
    url: config.siteURL,
    description: config.description
  })
}

main()
