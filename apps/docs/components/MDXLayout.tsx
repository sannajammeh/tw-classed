import classed from "tw-classed";
import { Text } from "./ui/text";

export const DocsGrid = classed(
  "div",
  "grid grid-cols-[270px,1fr,_270px] min-h-screen gap-4",
  "dark:text-slate-100"
);

export const DocsSidebar = classed(
  "aside",
  "border-r py-5",
  "dark:border-slate-700"
);

export const SidebarList = classed("ul", "flex flex-col");

export const ListItem = classed(
  "li",
  "flex items-center px-5 py-2 hover:bg-indigo-500 hover:text-white",
  "transition-all"
);

export const SidebarSection = classed("section", "my-5");

export const SidebarTitle = classed(Text, {
  defaultVariants: {
    size: "large",
    weight: "medium",
  },
});

export const DocsContent = classed(
  "main",
  "mx-auto mt-16 mb-16 w-full",
  "prose prose-h1:font-medium prose-h2:font-medium dark:prose-invert max-w-[95ch]"
);
