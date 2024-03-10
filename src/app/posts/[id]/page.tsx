// src/app/posts/pages.tsx

import { Posts, StrapiEntity, StrapiResponse } from "@/types/strapi";
import PostCard from "@/components/PostCard";
import Image from "next/image";

const retrievePost = async (id: number) => {
    try {
        const rawResponse = await fetch(
            `${process.env.STRAPI_URL}/posts/${id}?populate[comments][populate][0]=author&populate[thumbnail]=*&populate[author]=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                },
                cache: "no-cache",
            }
        );
        if (!rawResponse.ok) {
            throw new Error("Failed to fetch data");
        }
        const response = (await rawResponse.json()) as StrapiResponse<
            StrapiEntity<Posts>
        >;

        return response.data;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

const Post = async ({ params }: { params: { id: number } }) => {
    const post = await retrievePost(params.id);
    // console.log(post.attributes.thumbnail.data.attributes);
    let imageUrl =
        "http://localhost:1337" + post.attributes.thumbnail.data.attributes.url;

    return (
        <main className="max-w-4xl mx-auto p-3 md:p-8">
            <div className="card  bg-neutral shadow-xl mb-5">
                <Image
                    className="rounded-lg  max-h-48"
                    src={imageUrl}
                    width={1000}
                    height={500}
                    alt={post.attributes.thumbnail.data.attributes.name}
                />
                <div className="card-body">
                    <div className=" w-100  border-b-2 mb-2 border-gray-400 pb-3 mb-3">
                        <h1 className="title font-bold text-3xl mb-0">
                            {post.attributes.title}
                        </h1>
                        <span className="text-sm  flex  text-gray-400  ">
                            par{" "}
                            {post.attributes.author.data.attributes.username} le{" "}
                            {new Date(
                                post.attributes.publishedAt
                            ).toLocaleString()}
                        </span>{" "}
                    </div>
                    <p>
                        {post.attributes.content.map((e) =>
                            e.children.map((a) => a.text).join(" ")
                        )}
                    </p>
                    <div className="card-actions justify-end"></div>
                </div>
            </div>

            <h2 className=" font-semibold text-xl mt-8 mb-3">Commentaires</h2>
            {post.attributes.comments.data.map((comment) => (
                <div
                    key={comment.id}
                    className="card mb-3 bg-neutral shadow-xl"
                >
                    <div className="card-body py-5 px-6">
                        <div className="md:flex w-100  justify-between items-center border-b-2 mb-2 border-gray-400 pb-2">
                            <h2 className="card-title mb-1 md:mb-0  text-gray-300 text-sm">
                                {
                                    comment.attributes.author.data.attributes
                                        .username
                                }
                            </h2>
                            <span className="text-sm  flex mb-0 text-gray-400">
                                le{" "}
                                {new Date(
                                    comment.attributes.publishedAt
                                ).toLocaleString()}
                            </span>
                        </div>

                        <p>{comment.attributes.comment}</p>
                    </div>
                </div>
            ))}

            {post.attributes.comments.data.length == 0 ? (
                <div role="alert" className="alert bg-neutral">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>Aucun commentaire</span>
                </div>
            ) : null}
        </main>

        //   <div className="p-3 md:p-8">
        //     <div className="my-8">

        //   <h1 className="title font-bold text-3xl mb-2">{post.attributes.title}</h1>
        //           <span className="text-sm  flex mb-0 text-gray-400">par {post.attributes.author.data.attributes.username} le {new Date(post.attributes.publishedAt).toLocaleString()}</span>
        //     </div>
        //     <Image className="mb-5"
        //         src={imageUrl}
        //         width={500}
        //         height={500}
        //         alt={post.attributes.thumbnail.data.attributes.name}
        //       />

        //   <p>{post.attributes.content.map((e) => e.children.map((a) => a.text).join(" "))}</p>

        //   <h2 className=" font-semibold text-xl mt-8 mb-3">Commentaires</h2>

        //   {
        //     post.attributes.comments.data.map((comment) => <div key={comment.id} className="card mb-3 bg-neutral shadow-xl">
        //     <div className="card-body">

        //       <div className="md:flex w-100  justify-between items-center">
        //         <h2 className="card-title md:mb-3">{comment.attributes.author.data.attributes.username}</h2>
        //         <span className="text-sm  flex mb-0 text-gray-400">le {new Date(comment.attributes.publishedAt).toLocaleString()}</span>
        //       </div>

        //       <p>{comment.attributes.comment}</p>
        //     </div>
        //   </div> )
        //   }

        //   </div>
    );
};

export default Post;
