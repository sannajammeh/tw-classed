import {
  DownloadIcon,
  TransformIcon,
  GearIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import React, { useMemo } from "react";
import { Cards, Card } from "./ui/Card";

import guideJson from "pages/docs/guide/_meta.json";

const GuideCards = () => {
  const guides = useMemo(() => {
    const guides = Object.entries(guideJson).map(([slug, value]) => {
      return typeof value === "string"
        ? { slug, title: value, href: `/docs/guide/${slug}` }
        : {
            slug,
            ...(value as any),
            href: (value as any).href || `/docs/guide/${slug}`,
          };
    });
    return guides;
  }, []);
  return (
    <div className="mt-12 mb-24">
      <Cards>
        {guides.map((guide) => (
          <Card key={guide.slug} href={guide.href}>
            {getIcon(guide.icon)}
            <h3>{guide.title}</h3>
          </Card>
        ))}
      </Cards>
    </div>
  );
};

export default GuideCards;

const getIcon = (icon: string) => {
  switch (icon) {
    case "DownloadIcon":
      return <DownloadIcon />;
    case "TransformIcon":
      return <TransformIcon />;
    case "GearIcon":
      return <GearIcon />;
    case "RadixIcon":
      return <RadixIcon />;
    case "Pencil2Icon":
      return <Pencil2Icon />;
    default:
      return null;
  }
};

const RadixIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
      fill="currentcolor"
    ></path>
    <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
    <path
      d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
      fill="currentcolor"
    ></path>
  </svg>
);
