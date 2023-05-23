import { program } from "commander";
import "date-util";

// extend Date object to have strtotime method
declare global {
  interface Date {
    strtotime: (str: string) => Date | false | number; // return type is Date or false or number (unix timestamp)
  }
}

/**
 * Takes a date string and echos unix timestamp
 * @param timesString
 * @returns
 */
export default function toUnix(timesString: string): void {
  const parsedDate = new Date().strtotime(timesString);
  if (parsedDate === false) {
    return program.error("Invalid date string");
  }

  if (typeof parsedDate === "number") {
    // already unix timestamp
    console.log(parsedDate);
    return;
  }

  // returned object is Date, convert to unix timestamp
  console.log(Math.round(parsedDate.getTime() / 1000)); // unix time in seconds
}
