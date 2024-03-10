import PhotoCard from "./PhotoCard"
import { Photo } from "@/types/Photo"


async function getPhotos(id:number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?albumId="+id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PhotosList = async ({albumId}:{albumId : number}) => {
  const photos = await getPhotos(albumId);
  // console.log(photos);
  console.log(photos);
  
  return (
    <section className="grid grid-cols-6 gap-5 mb-2 px-5">
     { photos.map((photo:Photo) => 
        <PhotoCard key={photo.id} photo={photo}/>
      )}
    </section>
  )
}

export default PhotosList