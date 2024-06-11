const country = {
  name: "Wonderland",
  population: 5000000,
  isDeveloped: true,
  languages: ["Wonderlandish", "English"],
  capital: {
    name: "Wonder City",
    population: 1000000,
  },
  neighbors: [
    {
      name: "Neighborland",
      borderLength: 200,
    },
    {
      name: "Friendland",
      borderLength: 300,
    },
  ],
};

// I can auto create type base on given data
export type Country = typeof country;

//example how to check type recursively
export type PrimitiveType<T> = {
  [P in keyof T]: T[P] extends object ? PrimitiveType<T[P]> : T[P];
};
