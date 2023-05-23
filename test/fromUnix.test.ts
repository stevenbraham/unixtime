import fromUnix from "../src/commands/fromUnix";
import { ErrorOptions, program } from "commander";

describe("fromUnix commmand", () => {
  test("invalid timestamp", () => {
    // mock program.error method to prevent it from exiting the process
    const mockedError = jest.spyOn(program, "error");
    mockedError.mockImplementation(
      //@ts-ignore
      (message: string, errorOptions?: ErrorOptions | undefined) => {}
    );

    const output = fromUnix("-3oinvalid timestamp blabla");
    expect(output).toBe(undefined);
    expect(mockedError).toHaveBeenCalledWith("Invalid unix timestamp");
    mockedError.mockRestore();
  });

  test("valid timestmap", () => {
    // mock program.error method to prevent it from exiting the process
    const mockedError = jest.spyOn(program, "error");
    mockedError.mockImplementation(
      //@ts-ignore
      (message: string, errorOptions?: ErrorOptions | undefined) => {}
    );

    const testString = Math.round(new Date().getTime() / 1000).toString();
    const output = fromUnix(testString);
    expect(output).toBe(undefined);
    expect(mockedError).not.toHaveBeenCalled();
    mockedError.mockRestore();
  });
});
