import { NextPage } from "next";
import classed from "tw-classed";

const Title = classed("h1", "text-lg", {
  variants: {
    color: {
      blue: "text-blue-500",
    },
    margin: {
      sm: "mt-4",
    },
  },
});

const StyledComp = classed(Title, {
  variants: {
    size: {
      large: "text-2xl",
    },
    color: {
      red: "text-red-500",
    },
  },
});

const Home: NextPage = () => {
  return (
    <div>
      <Title>Hello World</Title>
      <Title as="h2" color="blue">
        Blue title
      </Title>
      <StyledComp as="a" href="http://localhost:3000" color="red" size="large">
        sdsdsd
      </StyledComp>
    </div>
  );
};

export default Home;
