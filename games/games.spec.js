const request = require("supertest");
const server = require("./server.js");

describe("/POST", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

  it("should return 200 when posting a game correctly", () => {
    return request(server).post("/games").send({ title: "Digimon", genre: "RPG?", releaseYear: "1996" }).expect(200);
  });

  it("should return 422 if its invalid post", () => {
    return request(server).post("/games").send({ title: "invalid", genre: 'invalid',releaseYear:"invalid" }).expect(422);
  });
});

describe("/GET", () => {
  afterEach(() => {
    db("games").truncate();
  });

  it("should return an array empty array", async () => {
    const res = await request(server).get("/games");
    expect(Array.isArray(res.body)).toEqual(true);
  });

  it("should return an array if it was succesful", async () => {
    const game = {
      title: "test",
      genre: "test",
      releaseYear: "2013"
    };

    await Games.insert(game);

    const res = await request(server).get("/games");

    expect(res.body[0].title).toEqual(game.title);
  });
});
