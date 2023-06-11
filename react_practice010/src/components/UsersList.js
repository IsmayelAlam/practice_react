import { useEffect, useReducer } from "react";
import { fetchUsers } from "../store";
import { useDispatch } from "react-redux";

export default function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("test");
  }, [dispatch]);

  return <div>UsersList</div>;
}
