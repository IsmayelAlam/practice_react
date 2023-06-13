import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

export default function AlbumListItem({ album }) {
  const header = (
    <>
      <Button rounded secondary>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      albums
    </ExpandablePanel>
  );
}
