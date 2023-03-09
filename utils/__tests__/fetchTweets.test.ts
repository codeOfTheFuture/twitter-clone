import fetchMock from "jest-fetch-mock";
import { fetchTweets } from "../fetchTweets";

describe("fetchTweets", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return an array of tweets", async () => {
    const mockTweets = [
      { id: 1, text: "Tweet 1" },
      { id: 2, text: "Tweet 2" },
    ];
    fetchMock.mockResponseOnce(JSON.stringify(mockTweets));
    const tweets = await fetchTweets();
    expect(tweets).toEqual(mockTweets);
  });

  it("should throw an error if the fetch request fails", async () => {
    fetchMock.mockReject(new Error("There was an error"));
    await expect(fetchTweets()).rejects.toThrowError("There was an error");
  });
});
