import app from "../src/app";
import supertest from "supertest";
const request = supertest(app);

/*
 ** REMARKS: Help remove duplication in tests and this wraps the
 **          get without needing to include all the imports
 */
export async function getRequestTest(url, userId = undefined) {
  const actualResponse = userId
    ? await request.get(url).set("x-user-id", userId)
    : await request.get(url);
  return actualResponse;
}

export async function postRequestTest(url, userId, payload) {
  const actualResponse = await request
    .post(url)
    .set("Content-type", "application/json")
    .set("x-user-id", userId)
    .send(payload);
  return actualResponse;
}
