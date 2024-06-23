/* eslint-disable */
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

/**
 * HTTP Cloud Function that responds with a simple "Hello from Firebase!" message.
 *
 * @param {express.Request} request - The Express request object.
 *   @param {string} request.method - The HTTP method of the request (e.g., 'GET', 'POST').
 *   @param {string} request.url - The URL of the request.
 *   @param {Object} request.headers - The headers of the request.
 *   @param {Object} request.query - The query parameters of the request.
 *   @param {Object} request.body - The body of the request (for POST, PUT, etc.).
 * @param {express.Response} response - The Express response object.
 *   @param {Function} response.status - Sets the HTTP status code of the response.
 *   @param {Function} response.send - Sends a response to the client.
 *   @param {Function} response.json - Sends a JSON response to the client.
 */

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
