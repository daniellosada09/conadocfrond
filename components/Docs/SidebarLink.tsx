"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Lorem, ipsum.
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          Lorem ipsum dolor sit amet.
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white `}
        >
          Lorem ipsum dolor sit.
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
