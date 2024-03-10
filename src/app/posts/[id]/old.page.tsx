import CommentForm from "@/components/Comment/CommentForm";
import CommentsList from "@/components/Comment/CommentList";
import { Metadata } from "next";

async function getPost(id:number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


export const metadata: Metadata = {
  title: '',
  description: '',
}
 


const Post = async ({ params }: { params: { id: number } }) => {
  const post = await getPost(params.id);

  metadata.title = post.title
  metadata.description = post.body
  // console.log(post);
  
  return <main className="p-8">
      <article >
            
        <h1 className=" font-bold text-3xl my-8">{post.title}</h1>
        <p>{post.body}</p>


        <h2 className=" font-bold text-xl my-8">Commentaires</h2>

        <CommentForm postId={post.id} />

        <CommentsList postId={post.id}/>

      </article>
    </main>
};

export default Post;