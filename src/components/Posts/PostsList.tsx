import PostCard from "./PostCard"
import { Post } from "@/types/Post"
import { StrapiEntity, Posts } from "@/types/strapi"

const PostsList = ({posts}:{posts : StrapiEntity<Posts>[]}) => {
  return (
    <section className="flex flex-wrap gap-5 p-4 justify-center">
     { posts.map((post) => 
        <PostCard key={post.id} post={post}/>
      )}
    </section>
  )
}

export default PostsList