import toUnix from "../src/commands/toUnix";
import { ErrorOptions, program } from "commander";

describe("toUnix commmand", () => {
  test("invalid datestring", () => {
    // mock program.error method to prevent it from exiting the process
    const mockedError = jest.spyOn(program, "error");
    mockedError.mockImplementation(
      //@ts-ignore
      (message: string, errorOptions?: ErrorOptions | undefined) => {}
    );

    const output = toUnix("invalid datestring blabla");
    expect(output).toBe(undefined);
    expect(mockedError).toHaveBeenCalledWith("Invalid date string");
  });

  test("valid date", () => {
    // testing with a fixed date, so we can expect a fixed output. Math.round should not be called in this test because the date is already a unix timestamp

    const mockeddMathRound = jest.spyOn(Math, "round");

    const output = toUnix("2021-01-01");
    expect(output).toBe(undefined);
    expect(mockeddMathRound).not.toHaveBeenCalled();

    mockeddMathRound.mockRestore();
  });

  test("valid time string", () => {
    // testing with a time string. Math.round and getTime should have been called in this test because the date is not a unix timestamp
    const mockeddMathRound = jest.spyOn(Math, "round");
    const mockedGetTime = jest.spyOn(Date.prototype, "getTime");

    const output = toUnix("+1 day");
    expect(output).toBe(undefined);
    expect(mockeddMathRound).toHaveBeenCalled();
    expect(mockedGetTime).toHaveBeenCalled();

    mockedGetTime.mockRestore();
    mockeddMathRound.mockRestore();
  });
});
