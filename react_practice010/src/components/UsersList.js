import { useEffect } from "react";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserAdd = () => dispatch(addUser());

  if (isLoading) {
    return (
      <div>
        <Skeleton className={"h-10 w-full"} times={data.length} />
      </div>
    );
  }

  if (error) return <div>Error fetching data...</div>;

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
        <Button rounded secondary onClick={handleUserAdd}>
          + Add Users {data.length}
        </Button>
      </div>
      {renderUser}
    </div>
  );
}
