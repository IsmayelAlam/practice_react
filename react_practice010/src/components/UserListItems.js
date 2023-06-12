import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import useThunk from "../hooks/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading] = useThunk(removeUser);

  const handleDelete = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button rounded secondary onClick={handleDelete} loading={isLoading}>
        <GoTrashcan />
      </Button>
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
