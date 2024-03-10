import AlbumCard from "./AlbumCard"
import { Album } from "@/types/Album"

const AlbumsList = ({albums}:{albums : Album[]}) => {
  return (
    <section className="flex flex-wrap gap-5 p-4 justify-center">
     { albums.map((album) => 
        <AlbumCard key={album.id} album={album}/>
      )}
    </section>
  )
}

export default AlbumsList