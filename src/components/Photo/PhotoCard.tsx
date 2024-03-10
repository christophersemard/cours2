
import { Photo } from "@/types/Photo"
import Link from "next/link"
import Image from "next/image"

const PhotoCard = ({photo}:{photo : Photo}) => {
  return (
    <>
      <Image
          src={photo.url}
          width={500}
          height={500}
          alt={photo.title}
        />
    </>
  )
}

export default PhotoCard