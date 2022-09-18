import { getPosts, getPostLength } from "../theme/composables/posts";

export default {
  posts: await getPosts(),
  postLength: await getPostLength(),
  pageSize: 5,
};
