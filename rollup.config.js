import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/animated-title.ts",
  output: [
    {
      file: "./build/animated-title.cjs",
      format: "cjs",
      compact: true,
    },
    {
      file: "./build/animated-title.bundle.js",
      format: "es",
      compact: true,
    },
    {
      file: "./build/animated-title.iife.js",
      format: "iife",
      name: "RoundSlider",
      compact: true,
    },
  ],
  plugins: [resolve(), typescript(), terser()],
};
