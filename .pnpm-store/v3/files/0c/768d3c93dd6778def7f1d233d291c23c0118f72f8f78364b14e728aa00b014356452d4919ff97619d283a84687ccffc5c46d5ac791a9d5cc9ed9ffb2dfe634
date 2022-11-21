# remark-reading-time

Adds estimated reading time to your markdown files using [reading-time](https://www.npmjs.com/package/reading-time).

## Usage

```js
import readingTime from "remark-reading-time";

remark()
  .use(readingTime)
  .process(markdown, function (err, file) {
    console.log("Reading time is " + file.data.readingTime.text);
  });
```

By default, it will add the data to `readingTime` in your data. This can be
changed:

```js
import readingTime from "remark-reading-time";

remark()
  .use(readingTime, { attribute: "myKeyName" })
  .process(markdown, function (err, file) {
    console.log("Reading time is " + file.data.myKeyName.text);
  });
```

### MDX

You can also export the data to MDX files:

```js
import { compile } from "@mdx-js/mdx";
import readingTime from "remark-reading-time";
import readingMdxTime from "remark-reading-time/mdx";

const code = await compile(file, {
  compileOptions: {
    remarkPlugins: [
      remarkReadingTime,
      readingMdxTime, // register the mdx after the remarkReadingTime plugin
    ],
  },
});
```
