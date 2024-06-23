/* eslint-disable */

import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2/logger";
const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.resolve(
  __dirname,
  "../nicky-database-firebase-adminsdk-5l6j1-55a6a1db6f.json"
));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nextjs-project-d7d25.firebaseio.com",
});

/**
 * HTTP Cloud Function to get a random cat.
 *
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */

export const randomCats = onRequest((req, res) => {
  const cats = [
    { id: 1, name: "Whiskers" },
    { id: 2, name: "Mittens" },
    { id: 3, name: "Fluffy" },
    { id: 4, name: "Tiger" },
    { id: 5, name: "Shadow" },
    { id: 6, name: "Smokey" },
    { id: 7, name: "Boots" },
    { id: 8, name: "Simba" },
    { id: 9, name: "Ginger" },
    { id: 10, name: "Tigger" },
    { id: 11, name: "Oreo" },
    { id: 12, name: "Luna" },
    { id: 13, name: "Bella" },
    { id: 14, name: "Chloe" },
    { id: 15, name: "Kitty" },
    { id: 16, name: "Pepper" },
    { id: 17, name: "Salem" },
    { id: 18, name: "Misty" },
    { id: 19, name: "Lucky" },
    { id: 20, name: "Coco" },
  ];

  const randomIndex = Math.floor(Math.random() * cats.length);
  const randomCat = cats[randomIndex];

  logger.info("Hello logs!", { structuredData: true });

  res.status(200).json({ id: randomCat.id, name: randomCat.name });
});
