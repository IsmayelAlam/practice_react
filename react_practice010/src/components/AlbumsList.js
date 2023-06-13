import Button from "./Button";
import {
  useFetchAlbumsQuery,
  useCreateAlbumMutation,
  useDeleteAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import AlbumListItem from "./AlbumsListItem";

export default function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useCreateAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useDeleteAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton className="w-100% h-10" />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Album for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
