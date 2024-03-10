
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

          <div className="card w-full md:w-96 bg-neutral text-white shadow-xl">
              <Image className="rounded-lg mb-0 max-h-48"
                src={imageUrl}
                width={1000}
                height={500}
                alt={post.attributes.thumbnail.data.attributes.name}
              />
            <div className="card-body p-5">    
              <h2 className="card-title text-secondary">{title}</h2>
              <div className="md:flex justify-between">
                <p className="text-sm text-gray-400"> par {author.data.attributes.username}</p>
                <p className="text-sm text-gray-400 md:text-end">le {new Date(publishedAt).toLocaleString()}</p>
              </div>


            
              <div className="card-actions mt-3 justify-end">
                <Link className="btn btn-sm " href={"/posts/"+post.id}>Voir</Link>
              </div>
            </div>
        </div>
  );
};
export default PostCard;