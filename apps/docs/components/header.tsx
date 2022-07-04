import Link from "next/link";
import React from "react";
import { TbBrandTailwind } from "react-icons/tb";
import classed from "tw-classed";
import ThemeToggle from "./theme-toggle";
import { AppBar } from "./ui";

const Header = () => {
  return (
    <AppBar size="lg" className="bg-transparent">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <Link href="/">
          <a className="flex rounded-full border p-1">
            <TbBrandTailwind size="1.75rem" />
          </a>
        </Link>
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              <NavLink>
                <Link href="/docs" passHref>
                  <A>Docs</A>
                </Link>
              </NavLink>
              {/* <NavLink>
                <Link href="/blog" passHref>
                  <A>Blog</A>
                </Link>
              </NavLink> */}
              <NavLink>
                <A href="https://github.com/sannajammeh/tw-classed">Github</A>
              </NavLink>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </AppBar>
  );
};

export default Header;

const NavLink = classed(
  "li",
  "text-radix-slate11 transition-all font-medium",
  "hover:text-radix-slate12 hover:underline"
);

const A = classed("a", "rounded-md p-1");
