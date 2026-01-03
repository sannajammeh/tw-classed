import { classed } from "@tw-classed/react";
import Link from "next/link";

export const Card = classed(
  Link,
  "rounded-lg hover:bg-radix-slate4 transition-all border px-4 py-3 border-radix-slate6 flex items-center gap-3"
);

export const Cards = classed(
  "section",
  "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
);
