import React, { useState } from "react";
import {
  GithubAuthProvider,
  OAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  signInWithCredential,
  signInWithRedirect,
  signOut,
  //   getRedirectResult 
} from "firebase/auth";
import { _auth } from "./firebase-config";
import { Avatar, Button } from "@chakra-ui/react";
import githubSVG from "/github-mark.svg";

const provider = new GithubAuthProvider();

export default function GitHubLoginButton() {
  const [errors, setErrors] = useState<string>("");
  const [profile, setProfile] = useState({ user: "", image: "" });
  const loginGithub = () => {
    // signInWithRedirect(_auth, provider)

    signInWithPopup(_auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        // const user = result._tokenResponse.;
        const email = result?._tokenResponse?.email;
        const photoUrl = result.user.photoURL;
        // console.log(user, "user");
        console.log(result._tokenResponse);

        setProfile({ user: email, image: photoUrl });
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(token, "credential", credential);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = OAuthProvider.credentialFromResult(error.customData);
        // ...

        // console.log(error.code);
        // console.log(credential, "credential");
      });
  };

  const logoutGitHub = () => {
    signOut(_auth)
      .then(() => console.log("success"))
      .then(() => setProfile({ user: "", image: "" }));
  };

  return (
    <>
      {/* {!profile.user && <button onClick={loginGithub}>GitHub Sigin </button>} */}

      {!profile.user && (
        <Button
          // borderRadius="50%"
          bg="transparent"
          borderColor={"transparent"}
          type="button"
          width="42px"
          height="42px"
          onClick={loginGithub}
          cursor={"pointer"}
        >
          <Avatar
            // onMouseOver={handleMouseHover}
            // onMouseLeave={handle}
            // ref={logoRef}
            maxWidth={"100%"}
            src={githubSVG}
          />
        </Button>
      )}

      {profile.user && (
        <div>
          {profile.user}
          <button onClick={logoutGitHub}>GitHub SignOut</button>
        </div>
      )}

      {profile.image && <img src={profile.image} alt="image"></img>}
      {/* <div>{errors}</div> */}
    </>
  );
}
