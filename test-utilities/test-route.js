import app from "../src/app";
import supertest from "supertest";
const request = supertest(app);

/*
** REMARKS: Help remove duplication in tests and this wraps the 
**          get without needing to include all the imports
*/
export async function getRequestTest(url) {
    const actualResponse = await request.get(url);
    return actualResponse;
}