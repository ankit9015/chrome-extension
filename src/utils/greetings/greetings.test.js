import { greetings } from "./greetings";

describe("greetings", () => {
  const hoursInput = 2;
  const hoursInput2 = 8;
  const hoursInput3 = 14;
  const hoursInput4 = 20;

  test("greetings is Good Night", () => {
    expect(greetings(hoursInput)).toBe("Good Night");
  });
  test("greetings is Good Morning", () => {
    expect(greetings(hoursInput2)).toBe("Good Morning");
  });
  test("greetings is Good Afternoon", () => {
    expect(greetings(hoursInput3)).toBe("Good Afternoon");
  });
  test("greetings is Good Evening", () => {
    expect(greetings(hoursInput4)).toBe("Good Evening");
  });
});
