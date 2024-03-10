import PostsList from "../../components/Posts/PostsList";
import { Metadata } from "next";
import prisma from "@/utils/db";

const createPost = async () => {
  await prisma.post.create({
    data: {
      title: "Test",
      author: {
        create: {
          name: "TestAuthor",
          email: `${Math.random() * 1200}@gmail.comm`,
          password : "test"
        },
      },
    },
  });
};

async function getPosts() {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

		// on ajoute un faux temps de chargement
    await new Promise((resolve) => setTimeout(resolve, 500));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Liste des posts',
}
 
const Posts = async () => {
  console.log("test");
  const posts = await getPosts(); 
  console.log("test2");
  await createPost();
  console.log("test3");
  return <main className="p-8">
        
    <h1 className="title font-bold text-3xl my-8">Liste des posts</h1>

        <PostsList posts={posts}/>
      </main>
};

export default Posts;