import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { app } from "../index";
import request from "supertest";
import { clearDb } from "./helpers/reset-db";

describe("POST /add", () => {
  //   beforeEach(async () => {
  //     console.log("Clearing db...");
  //     await clearDb();
  //   });
  beforeAll(async () => {
    console.log("Clearing db...");
    await clearDb();
  });

  it("The Addition of 1 and 2 should be 3", async () => {
    const { body, status } = await request(app)
      .post("/add")
      .send({ a: 1, b: 2 });
    expect(status).toBe(200);
    expect(body).toEqual({ result: 3, id: expect.any(Number) });
  });
});
