import getReadingTime from "reading-time";
import { visit } from "unist-util-visit";

export default function readingTime({
  /**
   * The attribute name to store the reading time under data.
   *
   * @type {string}
   * @default "readingTime"
   */
  attribute = "readingTime",
} = {}) {
  return function (info, file) {
    let text = "";

    visit(info, ["text", "code"], (node) => {
      text += node.value;
    });

    file.data[attribute] = getReadingTime(text);
  };
}
