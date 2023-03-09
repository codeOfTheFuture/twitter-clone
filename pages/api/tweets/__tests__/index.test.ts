import request from "supertest";
import handler from "../index";

describe("GET /api/tweets", () => {
  it("returns a 200 status code", () => {
    request(handler)
      .get("/")
      .end((error, res) => {
        if (error) throw error;
        expect(res.status).toEqual(200);
      });
  });

  it("returns an array of tweets", () => {
    request(handler)
      .get("/")
      .end((error, res) => {
        if (error) throw error;
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  it("returns tweets sorted by timestamp in descending order", () => {
    request(handler)
      .get("/")
      .end((error, res) => {
        if (error) throw error;
        const tweets = res.body;

        const sortedTweets = [...tweets].sort(
          (a: { timestamp: string }, b: { timestamp: string }) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        expect(tweets).toEqual(sortedTweets);
      });
  });
});
