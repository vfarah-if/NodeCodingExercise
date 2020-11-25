import app from "../app";
import supertest from "supertest";
const request = supertest(app);

export async function getFetch(url) {
    return await request.get(url);
}