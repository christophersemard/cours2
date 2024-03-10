// src/components/PostCard.tsx
import { Posts, StrapiEntity } from "@/types/strapi";
import Link from "next/link";
import Image from "next/image";

type PropTypes = {
  post: StrapiEntity<Posts>;
};

const PostCard = ({ post }: PropTypes) => {
  const {
    attributes: { title, content, author, publishedAt },
  } = post;

  // console.log(author);
  
  let imageUrl = "http://localhost:1337" + post.attributes.thumbnail.data.attributes.url
  return (

          <div className="card w-96 bg-neutral text-white shadow-xl">
          <div className="card-body">    <Image className="rounded-lg  max-h-48"
          src={imageUrl}
          width={1000}
          height={500}
          alt={post.attributes.thumbnail.data.attributes.name}
        />
            <h2 className="card-title text-accent">{title}</h2>
            <div className="flex justify-between">
            <p className="text-sm text-gray-400"> par {author.data.attributes.username}</p>
            <p className="text-sm text-gray-400">le {new Date(publishedAt).toLocaleString()}</p>
            </div>


           
            <div className="card-actions justify-end">
              <Link className="btn btn-outline btn-sm btn-primary" href={"/posts/"+post.id}>Voir</Link>
            </div>
          </div>
        </div>
  );
};
export default PostCard;