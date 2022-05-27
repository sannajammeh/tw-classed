export type Breakpoints = "sm" | "md" | "lg" | "xl";
export type Modifyer = `hover` | `active` | `focus` | `disabled` | `selected`;
export type TwModifyer =
  | `${Modifyer | Breakpoints}:`
  | `${Breakpoints}:${Modifyer}:`;

export type ClassNames = string;
