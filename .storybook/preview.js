import "../src/styles/globals.css";
import Image from "next/image";

const OriginalImage = Image.default;

Object.defineProperty(Image, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  Iphone13Pro: {
    name: "iPhone 13 pro",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  iPadPro: {
    name: "ipad Pro",
    styles: {
      width: "834px",
      height: "1194px",
    },
  },
  macBookPro16Inch: {
    name: "macBook Pro 16 inch",
    styles: {
      width: "1536px",
      height: "960px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
