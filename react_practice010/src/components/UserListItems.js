import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import useThunk from "../hooks/useThunk";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading] = useThunk(removeUser);

  const handleDelete = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 rounded bg-slate-700 text-white">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between gap-3">
          <Button rounded secondary onClick={handleDelete} loading={isLoading}>
            <GoTrashcan />
          </Button>
          {user.name}
        </div>
      </div>
    </div>
  );
}
