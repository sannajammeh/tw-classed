import Composition from "@/components/home/Composition";
import FeaturedAt from "@/components/home/FeaturedAt";
import MainPage, { Divider } from "@/components/home/MainPage";
import VariantShowcase from "@/components/home/VariantShowcase";
import { Snippet } from "@/components/SnippetSwitcher";

export default function HomePage() {
  return (
    <>
      <MainPage />

      <VariantShowcase>
        <Snippet>
          {`const Button = classed("button", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    color: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
  },

  compoundVariants: [
    {
      size: "sm",
      color: "secondary",
      class: "px-2 py-1",
    },
    {
      size: "md",
      color: "secondary",
      class: "px-4 py-2",
    },
  ],

  defaultVariants: {
    size: "md",
    color: "primary",
  },
});`}
        </Snippet>

        <Snippet>
          {`const Button = classed("button", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    color: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
  },

  compoundVariants: [
    {
      size: "sm",
      color: "secondary",
      class: "px-2 py-1",
    },
    {
      size: "md",
      color: "secondary",
      class: "px-4 py-2",
    },
  ],

  defaultVariants: {
    size: "md",
    color: "primary",
  },
});`}
        </Snippet>

        <Snippet>
          {`const Button = classed("button", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    color: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
  },

  compoundVariants: [
    {
      size: "sm",
      color: "secondary",
      class: "px-2 py-1",
    },
    {
      size: "md",
      color: "secondary",
      class: "px-4 py-2",
    },
  ],

  defaultVariants: {
    size: "md",
    color: "primary",
  },
});`}
        </Snippet>
      </VariantShowcase>

      <Divider />

      <Composition>
        <Snippet>
          {`// Link.tsx
import Link from "next/link";

const ClassedLink = classed(Link, "text-blue-500 hover:text-blue-700");

// In your App
() => <ClassedLink href="/docs">Go to docs</ClassedLink>;`}
        </Snippet>

        <Snippet>
          {`// Button.tsx
const Button = classed(
  "button",
  "py-2 px-4 rounded-md bg-blue-400 text-blue-500"
);

// In your App
import Link from "next/link";

() => (
  <Button as={Link} href="/docs">
    Go to docs
  </Button>
);`}
        </Snippet>
      </Composition>

      <Divider />

      <FeaturedAt />

      <Divider />
    </>
  );
}

export const metadata = {
  title: "TW-Classed | Tailwind with the DX of CSS in JS",
  description:
    "Make your Tailwind components re-usable with the power of great DX, Variants and automatic Typescript intellisense",
};
