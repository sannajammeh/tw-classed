import { createClassed } from "./classed";
import { ClassedFunctionProxy } from "./types";

export const classedProxy = createClassed().classed as ClassedFunctionProxy;
