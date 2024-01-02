import { format, isSameYear, parse } from "date-fns"

import { IconCalendar } from "@components/Icons"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const PostCard = ({ id, frontmatter, timeToRead }) => {
  const publishDate = parse(frontmatter.date, "yyyy-MM-dd", new Date())
  let formattedPublishDate = format(publishDate, "MMM d, yyyy")
  if (isSameYear(new Date(), publishDate)) {
    formattedPublishDate = format(publishDate, "MMM d")
  }

  return (
    <li key={id} className="box-border w-1/2">
      <Link href={{ pathname: `/post/${id}` }} className="w-full outline-none group">

        <div className="w-full p-2 border-box h-52">
          <div className="box-border flex flex-col w-full h-full border-2 border-opacity-0 border-frontPrimary group-focus:border-opacity-100">
            <Image
              className="flex-none object-cover object-center w-full transition-all duration-500 ease-in-out h-2/3 group-hover:opacity-20 group-focus:opacity-20 group-hover:h-1/3 group-focus:h-1/3"
              src={frontmatter.heroImage.path.small}
              alt={frontmatter.title}
              width="600px"
              height="400px"
            />
            <div className="flex flex-col justify-between flex-grow w-full px-3 py-2 transition-all duration-500 ease-in-out h-1/3 group-hover:h-2/3 group-focus:h-2/3 bg-backgroundSecondary group-hover:bg-secondary group-focus:bg-secondary">
              <span
                className="overflow-hidden font-mono leading-tight transition-all duration-500 ease-in-out text-md overflow-ellipsis whitespace-nowrap group-hover:whitespace-normal group-focus:whitespace-normal"
                title={frontmatter.title}
              >
                {frontmatter.title}
              </span>
              <div className="flex flex-row flex-none align-middle text-frontSecondary">
                <IconCalendar
                  id={`calendarIcon_${id}`}
                  size={14}
                  className="mr-1 fill-current text-frontSecondary"
                />
                <span className="mr-2 font-mono text-xs leading-tight text-frontSecondary">
                  {formattedPublishDate}
                </span>
                <span className="font-mono text-xs leading-tight text-frontSecondary ">
                  ・ {timeToRead} min read
                </span>
              </div>
            </div>
          </div>
        </div>

      </Link>
    </li>
  );
}
