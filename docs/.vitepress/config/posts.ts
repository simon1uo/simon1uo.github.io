import { getPostLength, getPosts } from '../theme/composables/posts'

export default {
  posts: await getPosts(),
  postLength: await getPostLength(),
  pageSize: 5,
}
