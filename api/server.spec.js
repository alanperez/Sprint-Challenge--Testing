const server = require('./server');
const request = require("supertest");


describe("GET", () => {
    it("should return 200", () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  
    it("should return 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
  
    it("should return JSON data", async () => {
      const res = await request(server).get("/games");
      expect(res.type).toBe('application/json')
    });
  
    it("should return empty array", async () => {
      const res = await request(server).get("/games");
  
      expect(res.body).toEqual([]);
    });
  });