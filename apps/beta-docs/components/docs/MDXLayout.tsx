import Link from "next/link";
import { useRouter } from "next/router";
import classed from "tw-classed";
import { Text } from "../ui/text";

export const DocsGrid = classed(
  "div",
  "grid grid-cols-[270px,_1fr] min-h-screen gap-4",
  "xl:grid-cols-[270px,1fr,_270px]",
  "dark:text-slate-100"
);

export const DocsSidebar = classed(
  "aside",
  "border-r py-5",
  "dark:border-slate-700"
);

export const SidebarContent = classed("div", "sticky top-4 h-max w-full");

export const SidebarList = classed("ul", "flex flex-col");

export const ListItemContainer = classed(
  "li",
  "flex items-center px-5 py-2 hover:bg-radix-blue4 hover:text-radix-blue11",
  "transition-all",
  {
    variants: {
      active: {
        true: "!bg-radix-blue5 !text-radix-blue11",
      },
    },
  }
);

export const ListItem = ({
  children,
  active,
  href,
}: {
  children?: React.ReactNode;
  href?: string;
  active?: boolean;
}) => {
  const router = useRouter();

  if (href) {
    return (
      <ListItemContainer active={router.asPath === href || active}>
        <Link href={href} passHref>
          <Text className="w-full" as="a">
            {children}
          </Text>
        </Link>
      </ListItemContainer>
    );
  }
  return <ListItemContainer active={active}>{children}</ListItemContainer>;
};

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
  "prose prose-h1:font-medium prose-h2:font-medium dark:prose-invert max-w-[95ch] px-4 xl:px-0"
);
