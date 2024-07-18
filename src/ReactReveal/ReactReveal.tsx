import React from "react";

export type NonNullableProps<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export type ReactRevealType<T> = {
  name: string;
  age: number;
  country: string;
} & NonNullableProps<T>;

export type PartialProps<T> = {
  [P in keyof T]?: T[P];
};

export type OmitProps<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type PickProps<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type RecordProps<T extends keyof any, K> = {
  [P in T]: K;
};

export type RequiredProps<T> = {
  [P in keyof T]-?: T[P];
};

export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export type NewUser = PartialProps<User>;
export type RequiredUser = RequiredProps<User>;

export type OmitUser = OmitProps<User, "email" | "id">;

const ReactReveal: React.FC = (props) => {
  return <div></div>;
};

export default ReactReveal;
