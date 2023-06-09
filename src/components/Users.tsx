/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, setfetchStatus, showUsers } from "../redux/UserSlice";
import { __get } from "../utils";

function Users() {
  const userStore = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(setfetchStatus(true));

    __get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        if (data.length) {
          dispatch(addUsers(data));
        }
      })
      .catch((e) => alert(e))
      .finally(() => dispatch(setfetchStatus(false)));
  };

  return (
    <div>
      <Button
        onClick={fetchData}
        loading={userStore.fetchStatus}
        disabled={userStore.users.length}
      >
        Fetch Users
      </Button>

      {userStore.users.length > 0 && (
        <Button onClick={() => dispatch(showUsers())}>
          {userStore.showStatus === true ? "Hide" : "Show users"}
        </Button>
      )}

      {userStore.showStatus === true && (
        <ul>
          {userStore.users.map((it: any) => (
            <li>{it.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
