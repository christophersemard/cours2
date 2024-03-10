// src/app/posts/pages.tsx

import { Posts, StrapiEntity, StrapiResponse } from "@/types/strapi";
import PostCard from "@/components/PostCard";
import PostsList from "@/components/Posts/PostsList";

const retrievePosts = async () => {
  try {
    const rawResponse = await fetch(
      `${process.env.STRAPI_URL}/posts?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
        cache:"no-cache"
      }
    );
    if (!rawResponse.ok) {
      throw new Error("Failed to fetch data");
    }
    const response = (await rawResponse.json()) as StrapiResponse<
      Array<StrapiEntity<Posts>>
    >;

    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
const PostsIndex = async () => {
  const posts = await retrievePosts();

  return (
    <main className="max-w-5xl mx-auto p-3 md:p-8">
    <h1 className="title font-bold text-3xl mt-3 mb-8">Articles</h1>

    <PostsList posts={posts} />
      {/* {posts.map((post) => (
        <PostCard key={`${post.id}`} post={post} />
      ))} */}
    </main>
  );
};

export default PostsIndex;