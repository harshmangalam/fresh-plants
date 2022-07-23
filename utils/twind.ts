import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import {forms}  from "https://esm.sh/@twind/forms@0.1.4"
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  plugins:{
    forms
  }
};
if (IS_BROWSER) setup(config);
