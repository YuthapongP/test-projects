import React from "react";

const recursiveObj = (obj: object) => {
  if (typeof obj !== "object" || obj === null) {
    return <div>{obj}</div>;
  }

  return (
    <ul>
      {Object.entries(obj).map(([key, value]) => (
        <li>
          {key} : {recursiveObj(value)}
        </li>
      ))}
    </ul>
  );
};

function createMockupObj(nums: number) {
  const result = [];
  const chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < nums; i++) {
    result.push({
      id: Math.floor(Math.random() * 100),
      name: chars[Math.floor(Math.random() * chars.length)],
      favorite: {
        id: Math.floor(Math.random() * 100),
        bf: {
          1: "john",
          2: "josh",
          3: "jim",
        },
      },
    });
  }
  return result;
}

const mockup = createMockupObj(10);

export default function CreateMockup() {
  return (
    <div>
      {mockup.map((item, idx) => (
        <div key={idx}>
          <h2> Object {idx + 1}</h2>
          <div>{recursiveObj(item)}</div>
        </div>
      ))}
    </div>
  );
}
