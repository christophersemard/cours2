import AlbumsList from "../../components/Albums/AlbumsList";
import { Metadata } from "next";

async function getAlbums() {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");

    // on ajoute un faux temps de chargement
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export const metadata: Metadata = {
    title: "Albums",
    description: "Liste des albums",
};

const Albums = async () => {
    const albums = await getAlbums();
    return (
        <main className="max-w-4xl mx-auto p-3 md:p-8">
            <h1 className="title font-bold text-3xl my-8">Liste des albums</h1>

            <AlbumsList albums={albums} />
        </main>
    );
};

export default Albums;
