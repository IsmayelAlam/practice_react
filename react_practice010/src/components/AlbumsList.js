import Button from "./Button";
import { useFetchAlbumsQuery, useCreateAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

export default function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useCreateAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton className="w-full h-5" />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          list of photos.
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Album for {user.name}
        <Button onClick={handleAddAlbum}>+ Add album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
