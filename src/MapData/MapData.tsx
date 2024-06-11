import React from "react";

const animals = [
  {
    name: "Lion",
    class: "Mammal",
    habitat: "Savanna",
    diet: "Carnivore",
    lifespan: "10-14 years",
  },
  {
    name: "Elephant",
    class: "Mammal",
    habitat: "Grasslands and forests",
    diet: "Herbivore",
    lifespan: "60-70 years",
  },
  {
    name: "Bald Eagle",
    class: "Bird",
    habitat: "Forests near large bodies of water",
    diet: "Carnivore",
    lifespan: "20-30 years",
  },
  {
    name: "Great White Shark",
    class: "Fish",
    habitat: "Coastal and offshore waters",
    diet: "Carnivore",
    lifespan: "70 years",
  },
  {
    name: "Kangaroo",
    class: "Mammal",
    habitat: "Grasslands and forests",
    diet: "Herbivore",
    lifespan: "20 years",
  },
  {
    name: "Penguin",
    class: "Bird",
    habitat: "Antarctic coastlines",
    diet: "Carnivore",
    lifespan: "15-20 years",
  },
  {
    name: "Python",
    class: "Reptile",
    habitat: "Rainforests and grasslands",
    diet: "Carnivore",
    lifespan: "20-30 years",
  },
  {
    name: "Frog",
    class: "Amphibian",
    habitat: "Wetlands and forests",
    diet: "Carnivore",
    lifespan: "10-12 years",
  },
  {
    name: "Koala",
    class: "Mammal",
    habitat: "Eucalyptus forests",
    diet: "Herbivore",
    lifespan: "13-18 years",
  },
  {
    name: "Goldfish",
    class: "Fish",
    habitat: "Freshwater ponds and aquariums",
    diet: "Omnivore",
    lifespan: "10-15 years",
  },
];

console.log(animals);

export default function MapData() {
  const animalName = new Map(animals.map((animal) => [animal.name, animal]));
  console.log(animalName);
  console.log(animalName.get("Koala"));

  const animalName2 = Array.from(animals.values()).map((animal) => animal.name);
  console.log(animalName2);
  return (
    // <div>
    //   {animalName.forEach((e) => (
    //     <div>{e.get(name)}</div>
    //   ))}
    // </div>
    <div>
      {Array.from(animalName.values()).map((animal) => (
        <div key={animal.name}>{animal.name}</div>
      ))}
    </div>
  );
}
