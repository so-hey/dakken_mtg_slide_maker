import path from "path";
import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config, {}) => {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "./rust-wasm"),
        extraArgs: "--target web",
        outDir: path.resolve(__dirname, "./public/pkg"),
        outName: "rust_wasm",
      })
    );
    return config;
  },
};

export default nextConfig;
