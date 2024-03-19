"use client";
import Link from "next/link";
import styleClasses from "./NavLinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`
                ${
                  pathname.startsWith(href)
                    ? `${styleClasses.link} ${styleClasses.active}`
                    : `${styleClasses.link}`
                }
                `}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
