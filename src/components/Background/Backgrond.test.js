import { getImage } from ".";
import * as axios from "axios";

jest.mock("axios");

describe("get image", () => {
  test("should return image url when call is successful", async () => {
    const res = {
      request: {
        responseURL:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MDY4NzQwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
      },
    };
    axios.get.mockResolvedValue(res);
    const img = await getImage();

    expect(img).toMatch(
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY2MDY4NzQwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
    );
  });

  test("should return errorMessage when API is call fails", async () => {
    axios.get.mockRejectedValue({
      isAxiosError: true,
      response: { data: undefined },
    });

    const img = await getImage();
    expect(img).toEqual({ errorMessage: "network error" });
  });
});
