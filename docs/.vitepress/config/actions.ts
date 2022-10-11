export interface Action {
  theme: "brand" | "alt" | "sponsor";
  text: string;
  link: string;
}
export const actions: Action[] = [
  {
    theme: "brand",
    text: "✍🏻 post | 文章",
    link: "/archive",
  },
  {
    theme: "alt",
    text: "📚 notebook | 笔记本",
    link: "https://simon1uo.github.io/notebook",
  },
  {
    theme: "alt",
    text: "🚀 github | 代码仓库",
    link: "https://github.com/simon1uo",
  },
];
