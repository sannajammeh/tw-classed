import { Container, Text } from "@/components/ui";
import Image from "next/image";
import React from "react";

import bytesImg from "public/bytes-dev.png";
import reactnewsletterImg from "public/reactnewsletter.svg";

const FeaturedAt = () => {
  return (
    <Container render={<section />}>
      <Text center variant="title">
        Featured on
      </Text>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        <a
          href="https://bytes.dev"
          target="_blank"
          className="cursor-pointer max-w-[275px]"
        >
          <Image src={bytesImg} alt="bytes-dev" />
        </a>
        <a
          href="https://reactnewsletter.com/"
          target="_blank"
          className="cursor-pointer"
        >
          <Image className="h-full" src={reactnewsletterImg} alt="bytes-dev" />
        </a>
      </div>
    </Container>
  );
};

export default FeaturedAt;
