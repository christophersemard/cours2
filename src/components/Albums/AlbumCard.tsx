
import { Album } from "@/types/Album"
import Link from "next/link"

const AlbumCard = ({album}:{album : Album}) => {
  return (
    <>
      <div className="card w-96 bg-neutral text-white shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{album.title}</h2>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary" href={"/albums/"+album.id}>Voir</Link>
    </div>
  </div>
</div>
    </>
  )
}

export default AlbumCard