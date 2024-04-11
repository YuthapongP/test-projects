import React from "react";
import firebase from "../src/firebase-config.js";

const FireBaseComponent = () => {
  const auth = firebase.auth();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await auth.signInWithPopup(provider);
      console.log(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Your React Component</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default FireBaseComponent;
