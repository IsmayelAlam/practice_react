import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("test");
  }, [dispatch]);

  if (isLoading)
    return (
      <div>
        <Skeleton className={"h-5 w-full"} />
        <Skeleton className={"h-5 w-5"} />
        <Skeleton className={"h-5 w-10"} />
        <Skeleton className={"h-10 w-full"} />
        <Skeleton className={"h-10 w-10"} />
      </div>
    );
  if (error) return <div>Error fetching data...</div>;

  return <div>{data.length}</div>;
}
