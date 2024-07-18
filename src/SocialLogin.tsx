import React, { MouseEventHandler, useMemo } from "react";

type AnyFunction = (...args: unknown[]) => unknown;

export interface ILoginButton {
  iconURL: string;
  name: string;
  // eslint-disable-next-line no-undef
  onClick: MouseEventHandler<HTMLButtonElement> | AnyFunction;
}

export default function SocialLogin() {
  const socialMediaLogin = useMemo<ILoginButton[]>(
    () => [
      {
        name: GOOGLE,
        iconURL: icons[`${GOOGLE}-rounded.svg`],
        onClick: handleLoginWithGoogle,
      },
      {
        name: GITHUB,
        iconURL: icons[`${AMAZON}-rounded.svg`],
        onClick: getCodeAmazon,
      },
    ],
    []
  );

  return <div></div>;
}
