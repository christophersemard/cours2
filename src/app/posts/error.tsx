// users/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Erreur lors du chargement des posts</h2>
      <button onClick={() => reset()}>Reessayer</button>
    </div>
  );
}