export interface Action {
  theme: "brand" | "alt" | "sponsor";
  text: string;
  link: string;
}
export const actions: Action[] = [
  {
    theme: "brand",
    text: "✍🏻 post",
    link: "/archive",
  },
  {
    theme: "alt",
    text: "📚 notebook",
    link: "https://simon1uo.github.io/notebook",
  },
  {
    theme: "alt",
    text: "🚀 github profile",
    link: "https://github.com/simon1uo",
  },
];
