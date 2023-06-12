import { addUser, fetchUsers } from "../store";
import useThunk from "../hooks/useThunk";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const [doFetchUsers, isLoadingUser, loadingUserError] = useThunk(fetchUsers);
  const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(doFetchUsers, [doFetchUsers]);

  const handleUserAdd = () => doCreateUsers();

  let content;

  if (isLoadingUser) {
    content = <Skeleton className={"h-10 w-full"} times={5} />;
  } else if (loadingUserError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} loading={isCreatingUser}>
          + Add Users
        </Button>
        {creatingUserError && "error creating new user."}
      </div>
      {content}
    </div>
  );
}
