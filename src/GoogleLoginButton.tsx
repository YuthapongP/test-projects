import React, { useRef, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { _auth } from "./firebase-config";
import googleSVG from "/icons8-google.svg";
import { Avatar, Button } from "@chakra-ui/react";

const provider = new GoogleAuthProvider();

export default function GoogleLoginButton() {
  const [profile, setProfile] = useState({ email: "", image: "" });
  const [hoverLogo, setHoverLogo] = useState<boolean>(false);
  const logoRef = useRef<HTMLSpanElement | null>(null);

  const onLoginGoogle = () => {
    setPersistence(_auth, browserLocalPersistence);

    provider.setCustomParameters({ prompt: "select_account" });

    signInWithPopup(_auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        setProfile({ email: user.email, image: user.photoURL });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token, "token");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onLogoutGoogle = () => {
    signOut(_auth)
      .then(() => setProfile({ email: "", image: "" }))
      .catch((error) => console.log(error));
  };

  console.log(profile);

  // const handleMouseHover: React.MouseEventHandler<HTMLSpanElement> = () => {
  //   setHoverLogo(true);
  // };

  return (
    <>
      {!profile.email && (
        <Button
          borderRadius="50%"
          bg="transparent"
          type="button"
          width="44px"
          height="44px"
          onClick={onLoginGoogle}
          cursor={"pointer"}
        >
          <Avatar
            // onMouseOver={handleMouseHover}
            // onMouseLeave={handle}
            width="100%"
            height={"auto"}
            ref={logoRef}
            src={googleSVG}
          />
        </Button>
      )}

      <div>{profile.email}</div>

      {profile.image && <img src={profile.image} alt="myImage" />}
      <br />
      {profile.email && <Button onClick={onLogoutGoogle}> Logout</Button>}
    </>
  );
}
