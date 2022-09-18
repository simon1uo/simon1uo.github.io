export interface Action {
  theme: "brand" | "alt" | "sponsor";
  text: string;
  link: string;
}
export const actions: Action[] = [
  {
    theme: "brand",
    text: "my github profile",
    link: "https://github.com/simon1uo",
  },
  {
    theme: "alt",
    text: "my work",
    link: "https://github.com/simon1uo",
  },
  {
    theme: "alt",
    text: "my post",
    link: "/archive",
  },
];
