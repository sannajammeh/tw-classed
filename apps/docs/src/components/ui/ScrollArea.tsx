import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { classed } from "@tw-classed/react";
import classes from "./ScrollArea.module.css";

const ScrollArea = classed(
  ScrollAreaPrimitive.Root,
  "w-full h-full rounded-lg overflow-hidden bg-radix-slate1"
);

const ScrollAreaViewport = classed(
  ScrollAreaPrimitive.Viewport,
  "w-full h-full overflow-auto rounded-[inherit]"
);

const ScrollAreaScrollbar = classed(
  ScrollAreaPrimitive.Scrollbar,
  classes.scrollbar
);

const ScrollAreaThumb = classed(ScrollAreaPrimitive.Thumb, classes.thumb);

const ScrollAreaCorner = classed(
  ScrollAreaPrimitive.Corner,
  "bg-radix-slateA8"
);

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
};
