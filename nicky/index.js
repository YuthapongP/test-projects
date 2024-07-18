/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

/* eslint-disable */

const admin = require("firebase-admin");
const path = require("path");

// const serviceAccount = require(path.resolve(
//   __dirname,
// ));

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://nextjs-project-d7d25.firebaseio.com",
// });

const randomCats = onRequest((req, res) => {
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

const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

module.exports = { helloWorld, randomCats };
