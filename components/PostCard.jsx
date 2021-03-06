import { format, isSameYear, parse } from "date-fns"

import { IconCalendar } from "@components/Icons"
import Link from "next/link"
import React from "react"

export const PostCard = ({ slug, frontmatter, timeToRead }) => {
  const publishDate = parse(frontmatter.date, "yyyy-MM-dd", new Date())
  let formattedPublishDate = format(publishDate, "MMM d, yyyy")
  if (isSameYear(new Date(), publishDate)) {
    formattedPublishDate = format(publishDate, "MMM d")
  }

  return (
    <li key={slug} className="box-border w-1/2">
      <Link href={{ pathname: `/post/${slug}` }}>
        <a className="w-full group outline-none">
          <div className="w-full p-2 border-box h-52">
            <div className="flex flex-col w-full h-full border-2 border-frontPrimary border-opacity-0 group-focus:border-opacity-100 box-border">
              <img
                className="object-cover w-full transition-all object-center duration-500 ease-in-out h-2/3 group-hover:opacity-20 group-focus:opacity-20 flex-none group-hover:h-1/3 group-focus:h-1/3"
                src={frontmatter.heroImage.path.small}
                alt={frontmatter.title}
                width="600px"
                height="400px"
              />
              <div className="flex flex-col justify-between w-full h-1/3 group-hover:h-2/3 group-focus:h-2/3 px-3 py-2 flex-grow transition-all duration-500 ease-in-out bg-backgroundSecondary group-hover:bg-secondary group-focus:bg-secondary">
                <span
                  className="font-mono text-md leading-tight transition-all duration-500 ease-in-out overflow-ellipsis overflow-hidden whitespace-nowrap group-hover:whitespace-normal group-focus:whitespace-normal"
                  title={frontmatter.title}
                >
                  {frontmatter.title}
                </span>
                <div className="align-middle text-frontSecondary flex flex-row flex-none">
                  <IconCalendar
                    id={`calendarIcon_${slug}`}
                    size={14}
                    className="fill-current text-frontSecondary mr-1"
                  />
                  <span className="font-mono text-xs text-frontSecondary leading-tight mr-2">
                    {formattedPublishDate}
                  </span>
                  <span className="font-mono text-xs text-frontSecondary leading-tight ">
                    ・ {timeToRead} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}
