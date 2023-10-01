const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

// describe("GET /api/products", () => {
//   it("should return all products", async () => {
//     const res = await request(app).get("/api/products");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });
// });

describe("POST /api/settings", () => {
    it("should create a setting", async () => {
      const res = await request(app).post("/api/settings").send({
        name: "darkmode",
        value: "on",
        description: "Toggle Dark Mode",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe("darkmode");
    });
});