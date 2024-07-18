import React from "react";
import {
  difference,
  differenceBy,
  differenceWith,
  isEmpty,
  keyBy,
  sortBy,
} from "lodash";

const obj = {
  school: "Nareerat",
  age: 33,
  foods: "Somtam",
};

export default function TextAgain() {
  const A = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9, 9];
  const B = [1, 23, 3, 5, 9, 3, 7];

  const x = keyBy(obj, "school");

  console.log(x);

  const C = isEmpty(difference(A, B));
  const C2 = differenceWith(A, B);
  console.log(C);
  console.log(C2);

  const users = [
    { user: "Joe", age: 48, active: false },
    { user: "Robert", age: 34, active: true },
    { user: "Julie", age: 40, active: false },
    { user: "Stafey", age: 36, active: true },
  ];
  //   const result = sortBy(users, [
  //     function (item) {
  //       return item.active;
  //     },
  //   ]);
  //   console.log(result);

  const result = sortBy(users, ["user", "age"]);
  console.log(result);

  return <div>Yes!</div>;
}
