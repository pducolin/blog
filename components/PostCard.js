import React from "react";
import Link from "next/link";

export const PostCard = ({ slug, frontmatter }) => (
  <li key={slug} className="box-border w-1/2">
    <Link href={{ pathname: `/post/${slug}` }}>
      <a className="w-full group">
        <div className="w-full p-2 border-box h-52">
          <div className="flex flex-col w-full h-full">
            <img
              className="object-cover w-full transition duration-500 ease-in-out h-2/3 object-middle group-hover:opacity-20 group-focus:opacity-20"
              // src={frontmatter.titleImage}
              src="/assets/images/test.jpg"
              alt={frontmatter.title}
            />
            <div className="flex flex-col justify-between w-full px-3 py-2 transition duration-500 ease-in-out h-1/3 bg-backgroundSecondary group-hover:bg-secondary group-focus:bg-secondary">
              <span
                className="font-mono text-lg leading-tight truncate"
                title={frontmatter.title}
              >
                {frontmatter.title}
              </span>
              <span className="font-mono text-xs leading-tight align-bottom text-frontSecondary">
                📅 {frontmatter.date}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </li>
);
