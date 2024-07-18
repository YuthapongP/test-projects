import React, { useEffect, useState } from "react";
import { _auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";

// Optional: Importing Chakra UI components if you need them.
import { Button, Input } from "@chakra-ui/react";

export default function CredentialLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(_auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setCurrentUser(null);
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        _auth,
        email,
        password
      );
      setCurrentUser(userCredential.user);
      console.log(userCredential);
    } catch (error) {
      console.log("There is an error: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(_auth);
      setCurrentUser(null);
      setPassword("");
      setEmail("");
      alert("Successfully signed out");
    } catch (error) {
      console.log("Sign out error: ", error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.email}</h2>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
      )}
    </div>
  );
}
