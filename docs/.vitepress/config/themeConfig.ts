import { DefaultTheme } from "vitepress";
import nav from "./nav";

const themeConfig: DefaultTheme.Config = {
  logo: "/logo.svg",
  nav,
  footer: {
    copyright: "Copyright © 2022 Simon Luo",
  },
  socialLinks: [
    {
      icon: "github",
      link: "http://github.com/simon1uo/simon1uo.github.io",
    },
  ],
};

export default themeConfig;
