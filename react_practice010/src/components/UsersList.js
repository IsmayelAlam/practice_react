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

  if (isLoadingUser) {
    return (
      <div>
        <Skeleton className={"h-10 w-full"} times={data.length} />
      </div>
    );
  }

  if (loadingUserError) return <div>Error fetching data...</div>;

  const renderUser = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>
          {isCreatingUser ? (
            <Skeleton className="h-10 w-full" />
          ) : (
            "+ Add Users"
          )}
        </Button>
        {creatingUserError}
      </div>
      {renderUser}
    </div>
  );
}
