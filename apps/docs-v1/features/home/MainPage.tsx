import { Button, Text } from "components/ui";
import { NextPage } from "next";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { classed } from "@tw-classed/react";
import {
  UpdateIcon,
  LayersIcon,
  LightningBoltIcon,
  CodeIcon,
  ThickArrowUpIcon,
} from "@radix-ui/react-icons";
import { NextSeo } from "next-seo";
import { Aos } from "utils/aos";
import { useEffect } from "react";
import Stats, { formatBytes, useBundleSize } from "../../components/Stats";

const Home: NextPage<{}> = ({}) => {
  const { data: bundlesize } = useBundleSize();
  useEffect(() => {
    const unobserve = Aos.observeAll(
      document.querySelectorAll<HTMLElement>("[data-aos]")
    );

    return () => unobserve();
  }, []);

  return (
    <>
      <NextSeo
        title="TW-Classed | Tailwind with the DX of CSS in JS"
        description="Make your Tailwind components re-usable with the power of great DX, Variants and automatic Typescript intellisense"
      />
      {/* <GradientBg /> */}
      <div className="container mx-auto px-5 relative min-h-screen">
        <section className="py-24 fadeInUp">
          <h1 className="text-center text-5xl font-bold mb-4">
            Make your Tailwind components <br /> re-usable
          </h1>
          <p className="text-center text-2xl text-radix-slate10 mb-12 max-w-[65ch] mx-auto">
            Tailwind CSS and CSS-in-JS, the best of both worlds. Great DX and
            user experience right out of the gate.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              className="ios:border-2 ios:!outline-none ios:!border-radix-blue6 ios:hover:!border-radix-blue7 drop-shadow-[0_0px_12px_rgba(54,158,255,0.2)]"
              render={<Link href="/docs/installation" />}
              size="md"
              radius="pill"
            >
              Quick Start <FiArrowRight size="1.25rem" />
            </Button>
            <Button
              color="ghostSlate"
              className="ios:border-2 ios:!outline-none ios:!border-radix-slate6 ios:hover:!border-radix-slate7"
              render={<a href="https://github.com/sannajammeh/tw-classed" target="_blank" />}
              radius="pill"
              size="md"
            >
              Github <FiExternalLink />
            </Button>
          </div>
          <div className="prose prose-slate dark:prose-invert mx-auto">
            <pre className="rounded-xl bg-radix-slate2 text-radix-slate11">
              <code>npm install @tw-classed/react</code>
            </pre>
          </div>
        </section>

        <section className="fadeInUp">
          <div
            style={{
              width: "100%",
              height: "0px",
              position: "relative",
              paddingBottom: "50.313%",
            }}
            className="filter contrast-125 drop-shadow-[0_0px_35px_rgba(54,158,255,0.2)]"
          >
            <iframe
              src="https://streamable.com/e/svc2t9?autoplay=1&nocontrols=1&muted=1"
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
          <p className="text-center text-radix-slate11 mt-2 flex items-center space-x-2 justify-center">
            <ThickArrowUpIcon />{" "}
            <span>
              Fully typesafe, with automatic intellisense and variant inference.
            </span>
            <ThickArrowUpIcon />
          </p>
        </section>
        <Divider />

        <section
          data-aos-mount
          data-aos="fadeInUp"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 features mx-auto "
        >
          <FeatureCard>
            <FeatureCardIcon>
              <UpdateIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            <FeatureTitle>Reusable</FeatureTitle>
            <Text className="mt-1" color="secondary">
              TW Classed lets you create reusable components in record time. No
              more `forwardRef` & Typescript interfaces
            </Text>
          </FeatureCard>
          <FeatureCard>
            <FeatureCardIcon color="cyan">
              <LayersIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            <FeatureTitle>Extendable</FeatureTitle>
            <Text className="mt-1" color="secondary">
              Write your components in a modular way. Wrap them in a classed
              method and extend them with more styles
            </Text>
          </FeatureCard>
          <FeatureCard>
            <FeatureCardIcon color="violet">
              <CodeIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            <FeatureTitle>Variants</FeatureTitle>
            <Text className="mt-1" color="secondary">
              Add custom variants to have complete control over your
              component&apos;s look.
            </Text>
          </FeatureCard>
          <FeatureCard className="col-auto lg:col-[2] xl:col-auto">
            <FeatureCardIcon color="green">
              <LightningBoltIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            <FeatureTitle>Tiny</FeatureTitle>
            <Text className="mt-1" color="secondary">
              Acheive excellent DX and performance with only{" "}
              <small className="text-radix-cyan11">
                ~{formatBytes(bundlesize?.react.gzip)}
              </small>{" "}
              of code!
            </Text>
          </FeatureCard>
        </section>
        <Divider />
        <Stats />
        <Divider />

        <div className="my-12 block"></div>
      </div>
    </>
  );
};

export default Home;

const FeatureCard = classed(
  "article",
  "bg-transparent bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-3"
);

const FeatureTitle = classed(
  "h3",
  "text-xl font-medium flex gap-2 items-center mt-1"
);

const FeatureCardIcon = classed(
  "span",
  "inline-flex items-center justify-center p-4 bg-radix-blue5 text-radix-blue10 rounded-lg text-xl",
  {
    variants: {
      color: {
        green: "!bg-radix-green5 !text-radix-green10",
        violet: "!bg-radix-violet5 !text-radix-violet10",
        cyan: "!bg-radix-cyan5 !text-radix-cyan10",
      },
    },
  }
);

export const Divider = classed(
  "span",
  "block mx-auto w-11 h-[1px] bg-radix-slate6",
  {
    variants: {
      space: {
        1: "my-4",
        2: "my-8",
        3: "my-12",
        4: "my-16",
        5: "my-20",
        6: "my-32",
      },
    },
    defaultVariants: {
      space: 6,
    },
  }
);
