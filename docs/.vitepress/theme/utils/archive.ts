import { getQueryParam } from "./utils";

export type Post = {
  date?: string;
  title?: string;
  tags?: string[];
  description?: string;
  path: string;
};

export function initArchive(postData) {
  let archiveData = {};

  // $category = getQueryParam("category");
  // $tag = getQueryParam("tag");
  let $year = getQueryParam("year");

  postData.sort((post1, post2) => post2.date.localeCompare(post1.date));
  console.log(postData);

  postData.forEach((post) => {
    let year = "(" + new Date(post.date).getFullYear() + ")";
    if (!archiveData[year]) {
      archiveData[year] = [];
    }
    archiveData[year].push(post);
  });

  return archiveData;
}
