import React, { useState } from "react";
import { Heading } from "./components/typography/Heading";
import {
  TypoText,
  type TypoTextVariant,
} from "./components/typography/TypoText";
import { Button, type ButtonVariant } from "./components/ui/Button";
import TextAnimLoader from "./components/loader/TextAnimLoader";
import { Input, type InputVariant } from "./components/input/Input";
import { Loader, type LoaderVariant } from "./components/loader/Loader";
import { Text, type TextVariant } from "./components/typography/Text";

const App: React.FC = () => {
  const [count, setCount] = useState(1);
  const numbers = [6, 5, 4, 3, 2, 1] as const;

  const variants: ButtonVariant[] = [
    "light",
    "danger",
    "dark",
    "info",
    "outline",
    "warning",
    "success",
    "ghost",
    "primary",
    "secondary",
    "link",
  ];

  const variantsText: TypoTextVariant[] = [
    "default",
    "muted",
    "danger",
    "success",
    "caption",
    "subtitle",
    "highlight",
    "secondary",
    "small",
  ];

  const inputVariants: InputVariant[] = [
    "default",
    "underline",
    "outline",
    "filled",
    "rounded",
    "ghost",
    "flushed",
    "disabled",
  ];

  const loaderVariant: LoaderVariant[] = [
    "spinner",
    "ellipsis",
    "pulse",
    "bar",
    "wave",
    "dot-ring",
    "text",
    "cube",
    "dual-ring",
    "skeleton",
  ];

  const textVariant: TextVariant[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p1",
    "p2",
    "p3",
    "p4",
    "caption",
    "label",
    "overline",
    "blockquote",
    "muted",
    "danger",
    "success",
    "highlight",
    "secondary",
    "small",
    "subtitle",
  ];

  const handleClick = () => {
    setCount((prev) => {
      const updated = prev + 1;
      alert(
        `you hit me😢 , ${count === 1 ? "once" : count} ${
          count === 1 ? "" : "times"
        } ${count < 10 ? "" : "😫😭"} `
      );
      return updated;
    });
  };
  return (
    <>
      <>
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom Header
        </h2>{" "}
        <div className="min-h-screen flex flex-col justify-center items-center">
          {numbers.map((level) => (
            <Heading key={level} className="font-normal" level={level}>
              {" "}
              Custom Header Level {level}{" "}
            </Heading>
          ))}
        </div>
      </>

      <>
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom Paragraph
        </h2>{" "}
        <div className="min-h-screen flex flex-col justify-center items-center">
          {variantsText.map((text) => (
            <TypoText variant={text}>This is a {text} paragraph </TypoText>
          ))}
        </div>
      </>
      <>
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom Loader with variations
        </h2>{" "}
        <div className="min-h-screen flex flex-col justify-center items-center gap-10">
          {loaderVariant.map((load) => (
            <Loader key={load} variant={load} />
          ))}
        </div>
      </>

      <>
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom Buttons
        </h2>

        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <Button variant="danger">Click here!!</Button>
            {variants.map((variant) => (
              <Button key={variant} variant={variant} onClick={handleClick}>
                Click here!!
              </Button>
            ))}
          </div>
        </div>
      </>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom inputs
        </h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 justify-center items-center m-10 p-10">
          {inputVariants.map((inp) => (
            <Input key={inp} variant={inp} />
          ))}
        </div>
      </div>

      <>
        <h2 className="text-center text-3xl font-semibold">
          This is a Custom Text Loader
        </h2>
        <TextAnimLoader />
      </>
      <div className="flex flex-col justify-center items-center">
        <Button
          as="div"
          className="cursor-pointer bg-yellow-300 px-4 py-2 rounded">
          I'm a <code> div </code>
        </Button>
        <Button variant="link" as="a" href="https://google.com" target="_blank">
          Open Google
        </Button>
      </div>
      <>
        {textVariant.map((variant) => (
          <>
            <Text key={variant} variant={variant}>
              This is a {variant} text
            </Text>
            <br />
          </>
        ))}
      </>
    </>
  );
};

export default App;

// these are the repetative code of Heading, Text and Button components
{
  {
    /*     <div className="flex gap-5 flex-col  items-center">
        <div>
          <Button
            variant="light"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="danger"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="dark"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="info"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="warning"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="success"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="ghost"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="secondary"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
        <div>
          <Button
            variant="link"
            onClick={() => {
              setCount((prev) => prev + 1);
              alert(
                `you hit me😢 , ${count} ${count === 1 ? " time" : "times"} ${
                  count < 10 ? "" : "😫😭"
                } `
              );
            }}>
            Click Me
          </Button>
        </div>
      </div>  */
  }

  {
    /*       <>
        {" "}
        <Text>This is Paragraph </Text>
        <Text variant="caption">This is Paragraph </Text>
        <Text variant="danger">This is danger Paragraph </Text>
        <Text variant="highlight">This is Paragraph </Text>
        <Text variant="secondary">This is Paragraph </Text>
        <Text variant="subtitle">This is Paragraph </Text>
        <Text variant="small">This is Paragraph </Text>
        <Text variant="success">This is Paragraph </Text>
        <Text variant="muted">This is Paragraph </Text>
        <Text variant="default">This is Paragraph </Text>
      </> */
  }
  {
    /* <>
        <Heading className="font-normal" level={6}>
          Custom Header level 6
        </Heading>
        <Heading className="font-normal" level={5}>
          Custom Header level 5
        </Heading>
        <Heading className="font-normal" level={4}>
          Custom Header level 4
        </Heading>
        <Heading className="font-normal" level={3}>
          Custom Header level 3
        </Heading>
        <Heading className="font-normal" level={2}>
          Custom Header level 2
        </Heading>
        <Heading className="font-normal" level={1}>
          Custom Header level 1
        </Heading>
      </> */
  }
}
