import React, { useState } from "react";
import { addUsers } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const [newUser, setNewUser] = useState<string>(""); // Initialize with empty string
  const users = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handeAddUsers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(addUsers({ name: newUser }));
    setNewUser(""); // Clear input after submission
  };

  const handleSetNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handeAddUsers}>
        <label htmlFor="user">Add User:</label>
        <input
          type="text"
          id="user"
          value={newUser}
          onChange={handleSetNewUser}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        Users:
        {users?.users?.map((user: any) => (
          <li key={user?.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
