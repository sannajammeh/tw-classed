export const cx = (classNames: string[]) =>
  classNames.filter(Boolean).join(" ");

export const cn = (...classes: string[]) => cx(classes);

export const mergeClass = (
  c1: string,
  c2: string | null | undefined | boolean
) => {
  if (typeof c2 === "boolean") return c1;
  if (!c2) return c1;
  // Check if c1 is empty
  if (!c1) return c2;
  return c1 + " " + c2;
};
