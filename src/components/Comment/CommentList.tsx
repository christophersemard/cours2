import CommentCard from "./CommentCard"
import { Comment } from "@/types/Comment"


async function getComments(id:number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CommentsList = async ({postId}:{postId : number}) => {
  const comments = await getComments(postId);
  // console.log(comments);
  
  return (
    <section className="mb-2 px-5">
     { comments.map((comment:Comment) => 
        <CommentCard key={comment.id} comment={comment}/>
      )}
    </section>
  )
}

export default CommentsList