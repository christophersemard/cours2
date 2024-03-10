"use client"
import { useRef, useState } from "react";

function CommentForm({postId}:{postId : number}) {

  const commentText = useRef();
  const [sent, setSent] = useState(false);

  const handleValidate = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        postId: postId,
        body : commentText,
        name : "Michel",
        email : "michal@michel.fr"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    console.log(res);
    
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    else{
      setSent(true);
    }


  }

  return (
    <form className="flex flex-col mb-5">
      <h3 className="mb-3">Ajouter un commentaire</h3>
      <div className="join">
        
        <textarea  className="join-item mb-3  textarea bg-neutral" placeholder="Commentaire">{commentText.current}</textarea>
        <button className="join-item btn btn-accent" type="button" onClick={handleValidate}>Valider</button>
      </div>

      { sent ? 
        <div role="alert" className="alert alert-success mt-5">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Commentaire envoyé !</span>
</div>
        :
        null
      }
    </form>

  )
}

export default CommentForm