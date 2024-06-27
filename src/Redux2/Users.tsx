import React, { useState } from "react";
import { addUsers } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem } from "@chakra-ui/react";

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
        <label htmlFor="user">Add User: </label>
        <input
          type="text"
          id="user"
          value={newUser}
          onChange={handleSetNewUser}
        />
        <button type="submit">Add</button>
      </form>
      <List spacing={3} stylePosition="inside">
        <ListItem fontWeight="bold">Users:</ListItem>
        {users?.users?.map((user, idx) => (
          <ListItem key={user.name}>
            {idx + 1} - {user.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
