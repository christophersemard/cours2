import PostsList from "../../components/Posts/PostsList";
import { Metadata } from "next";
import prisma from "@/utils/db";
import { PrismaClient } from "@prisma/client";


async function getUsers() {

}

export const metadata: Metadata = {
  title: 'Users',
  description: 'Liste des users',
}
 
const Users = async () => {
  const users = await getUsers(); 
  return <main className="p-8">
        
    <h1 className="title font-bold text-3xl my-8">Liste des users</h1>

      </main>
};

export default Users;