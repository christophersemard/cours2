
import { Metadata } from "next";
import prisma from "@/utils/db";
import { PrismaClient } from "@prisma/client";


const getAllPosts = async (authorId: number) =>
  await prisma.post.findMany({
    where: {
      authorId,
    },
  });

const DetailsUsers = async ({ params }: { params: { id: string } }) => {
  const parsedId = parseInt(params.id);
  const posts = await getAllPosts(parsedId);

  if (!posts.length) {
    return <p>Users doenst have posts</p>;
  }
  return (
    <p>
      Users n°{parsedId} have {posts.length} posts
    </p>
  );
};
export default DetailsUsers;