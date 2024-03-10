import PhotosList from "@/components/Photo/PhotosList";
import { Metadata } from "next";

async function getAlbum(id:number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/"+id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}



export const metadata: Metadata = {
  title: '',
}
 


const Album = async ({ params }: { params: { id: number } }) => {
  const album = await getAlbum(params.id);

  metadata.title = album.title
  // console.log(album);
  
  return <main className="p-8">
      <article >
            
        <h1 className=" font-bold text-3xl my-8">{album.title}</h1>

          <PhotosList albumId={album.id}/>

      </article>
    </main>
};

export default Album;