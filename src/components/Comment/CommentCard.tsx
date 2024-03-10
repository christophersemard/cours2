
import { Comment } from "@/types/Comment"
import Link from "next/link"

const CommentCard = ({comment}:{comment : Comment}) => {
  return (
    <>
            <div className="card mb-3 bg-neutral shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{comment.name} - {comment.email} </h2>
    <p>{comment.body}</p>

  </div>
</div>
    </>
  )
}

export default CommentCard